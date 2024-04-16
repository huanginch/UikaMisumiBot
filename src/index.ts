import { GatewayIntentBits, Collection, SlashCommandBuilder } from "discord.js";
import { config } from "./config";
// import { SlashCommand } from "./types";
import { commands } from "./commands";
import { CustomClient } from "./CustomClass/Client";
import { deployCommands } from "./deploy-commands";

const client = new CustomClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

client.slashCommands = new Collection();

commands.forEach(command => {
  client.slashCommands.set(command.data.name, command);
});

client.once("ready", async () => {
  console.log("Discord bot is ready! 🤖");
  await deployCommands({ guildId: config.DISCORD_GUILD_ID });
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;
  console.log(interaction);

  const command = interaction.client.slashCommands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
    } else {
      await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
  }
});

client.login(config.DISCORD_TOKEN);