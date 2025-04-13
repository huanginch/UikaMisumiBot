import { GatewayIntentBits, Collection } from "discord.js";
import { config } from "./config";
// import { SlashCommand } from "./types";
import { commands } from "./commands";
import { CustomClient } from "./CustomClass/Client";
import { deployCommands } from "./deploy-commands";
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

const allowedChannelIds = ["767288097749598210", "1355749909323579483"];

client.on("messageCreate", async (message) => {
  const guildId = message.guild?.id;
  if (!guildId) return;

  // Ignore messages from bots
  if (message.author.bot) return;

  if (!allowedChannelIds.includes(message.channel.id)) return;

  // Example command: !hello
  if (message.content === "小祥" || message.content === "祥") {
    const replies = [
      "小祥小祥小祥小祥小祥小祥小祥!!!",
      "（陰暗的爬行）（尖叫）（扭曲）（陰暗的爬行）（尖叫）（扭曲）（陰暗的爬行）（尖叫）（爬行）（扭動）（分裂）（陰暗地蠕動）（翻滾）（激烈地爬動）（扭曲）（痙攣）（嘶吼）（蠕動）（陰森的低吼）（爬行）（分裂）（走上岸）（扭動）（痙攣）（蠕動）（扭曲的行走）（撲向小祥）",
      "You know, I want, I want\nIwant, I want you, so I want, \nいなければよかったのになぜ \nyou know, you know\nYou know, you know I want you to know\nHow much I need you so, いま 狂おしいほど",
      "汪",
      {
        image: path.join(
          __dirname,
          "assets",
          "5E0083457C1A8D1ECA761598F2D7D4EF.gif"
        ),
      },
      {
        image: path.join(
          __dirname,
          "assets",
          "saki....gif"
        ),
      },
      { image: path.join(__dirname, "assets", "250316_uika.gif") },
      { image: "https://media.tenor.com/sacoouDcJIcAAAAM/ave-mujica-bang-dream.gif" },
    ];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    if (typeof selected === "string") {
      await message.reply(selected);
    } else if (selected.image) {
      await message.reply({ files: [selected.image] });
    }
  }

  if (message.content === "小睦" || message.content === "睦") {
    const replies = [
      "不要把小祥從我身邊搶走!!!",
      {
        image: path.join(__dirname, "assets", "不要把小祥從我身邊搶走.gif"),
      },
    ];
    const selected = replies[Math.floor(Math.random() * replies.length)];

    if (typeof selected === "string") {
      await message.reply(selected);
    } else if (selected.image) {
      await message.reply({ files: [selected.image] });
    }
  }

  if (message.content === "小燈" || message.content === "燈") {
    const replies = [
      "再這樣下去小祥會被小燈搶走的...",
      {
        image: "https://media1.tenor.com/m/knBIy1g_ooAAAAAd/bandori-bang-dream.gif",
      },
    ];
    const selected = replies[Math.floor(Math.random() * replies.length)];

    if (typeof selected === "string") {
      await message.reply(selected);
    } else if (selected.image) {
      await message.reply({ files: [selected.image] });
    }
  }

  if (message.content === "真奈") {
    const replies = ["..."];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    await message.reply(randomReply);
  }

  if (message.content === "主人" || message.content === "初華大人") {
    const replies = [
      "嘖",
      { image: path.join(__dirname, "assets", "2025-03-04_17-40-01-ezgif.com-optimize.gif") },
      { image: path.join(__dirname, "assets", "2025-03-04_17-40-01_1-ezgif.com-optimize.gif") },
    ];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    if (typeof selected === "string") {
      await message.reply(selected);
    } else if (selected.image) {
      await message.reply({ files: [selected.image] });
    }
  }

  if (message.content === "晚安" || message.content === "晚安初華" || message.content === "晚安初華大人") {
    const replies = [
      "晚安Sumimi",
    ];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }
});

client.login(config.DISCORD_TOKEN);
