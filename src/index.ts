import { GatewayIntentBits, Collection } from "discord.js";
import { config } from "./config";
import { Reply } from "./types";
import { commands } from "./commands";
import { CustomClient } from "./CustomClass/Client";
import { deployCommands } from "./deploy-commands";

import fs from "fs";
import path from "path";

const client = new CustomClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.slashCommands = new Collection();

commands.forEach((command) => {
  client.slashCommands.set(command.data.name, command);
});

client.once("ready", async () => {
  console.log("Discord bot is ready! 🤖");
  for (const [guildId] of client.guilds.cache) {
    await deployCommands({ guildId });
    console.log(`Commands deployed to guild: ${guildId}`);
  }
  // await deployCommands({guildId: "767288097305657356"});
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const customClient = interaction.client as CustomClient;
  const command = customClient.slashCommands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
});

const allowedChannelIds = ["767288097749598210", "1355749909323579483"]; //prod
// const allowedChannelIds = ["1098987435947458651"]; //dev
const replies: Reply[] = [];

const commandsPath = path.join(__dirname, "replies");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".ts") || file.endsWith(".js"));

for (const file of commandFiles) {
  const reply: Reply = require(path.join(commandsPath, file)).default;
  replies.push(reply);
}

client.on("messageCreate", async (message) => {
  const guildId = message.guild?.id;
  if (!guildId) return;

  // Ignore messages from bots
  if (message.author.bot) return;

  if (!allowedChannelIds.includes(message.channel.id)) return;

  const content = message.content.toLowerCase();

  for (const reply of replies) {
    if (reply.keywords.some(k =>  typeof k === "string" ? k === content : (k as RegExp).test(content))) {
      await reply.execute(message);
      break;
    }
  }
});

client.login(config.DISCORD_TOKEN);
