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

  const msgContent = message.content.toLocaleLowerCase();

  // Example command: !hello
  if (msgContent === "小祥" || msgContent === "祥" || msgContent === "祥子") {
    const replies = [
      "小祥小祥小祥小祥小祥小祥小祥!!!",
      "（陰暗的爬行）（尖叫）（扭曲）（陰暗的爬行）（尖叫）（扭曲）（陰暗的爬行）（尖叫）（爬行）（扭動）（分裂）（陰暗地蠕動）（翻滾）（激烈地爬動）（扭曲）（痙攣）（嘶吼）（蠕動）（陰森的低吼）（爬行）（分裂）（走上岸）（扭動）（痙攣）（蠕動）（扭曲的行走）（撲向小祥）",
      "You know, I 汪, I 汪\nI want, I want you, so\nI want, いなければよかったのに\nなぜ you know, you know\nYou know, you know I want you to know\nHow much I need you so, いま 狂おしいほど",
      "汪",
      {
        image: path.join(
          __dirname,
          "assets",
          "5E0083457C1A8D1ECA761598F2D7D4EF.gif"
        ),
      },
      {
        image: path.join(__dirname, "assets", "saki....gif"),
      },
      { image: path.join(__dirname, "assets", "250316_uika.gif") },
      {
        image:
          "https://media.tenor.com/sacoouDcJIcAAAAM/ave-mujica-bang-dream.gif",
      },
    ];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    if (typeof selected === "string") {
      await message.reply(selected);
    } else if (selected.image) {
      await message.reply({ files: [selected.image] });
    }
  }

  if (msgContent === "小睦" || msgContent === "睦") {
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

  if (msgContent === "小燈" || msgContent === "燈") {
    const replies = [
      "再這樣下去小祥會被小燈搶走的...",
      {
        image:
          "https://media1.tenor.com/m/knBIy1g_ooAAAAAd/bandori-bang-dream.gif",
      },
    ];
    const selected = replies[Math.floor(Math.random() * replies.length)];

    if (typeof selected === "string") {
      await message.reply(selected);
    } else if (selected.image) {
      await message.reply({ files: [selected.image] });
    }
  }

  if (msgContent === "真奈") {
    const replies = ["..."];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    await message.reply(randomReply);
  }

  if (msgContent === "主人" || msgContent === "初華大人") {
    const replies = [
      "嘖",
      {
        image: path.join(
          __dirname,
          "assets",
          "2025-03-04_17-40-01-ezgif.com-optimize.gif"
        ),
      },
      {
        image: path.join(
          __dirname,
          "assets",
          "2025-03-04_17-40-01_1-ezgif.com-optimize.gif"
        ),
      },
    ];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    if (typeof selected === "string") {
      await message.reply(selected);
    } else if (selected.image) {
      await message.reply({ files: [selected.image] });
    }
  }

  if (
    msgContent === "晚安" ||
    msgContent === "晚安初華" ||
    msgContent === "晚安初華大人"
  ) {
    const replies = ["晚安Sumimi"];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }

  if (msgContent === "定治") {
    const replies = ["我不能說...", "他..."];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }

  if (msgContent === "甜甜圈") {
    const replies = ["甜甜圈...真奈很喜歡呢"];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }

  if (msgContent === "布丁") {
    const replies = ["小祥，你要吃布丁嗎?"];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }

  if (msgContent === "初音" || msgContent === "三角初音") {
    const replies = ["這是我真正的名字..."];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }

  if (msgContent === "閣樓") {
    const replies = ["為了小祥，我的閣樓一直空著"];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }

  if (msgContent === "crychic") {
    const replies = ["好忌妒，小燈"];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }

  if (msgContent === "ave mujica") {
    const replies = [
      "小祥可以邀請我，真的好開心",
      "我想和小祥在一起的願望，已經實現了",
    ];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }

  if (msgContent === "obilivionis") {
    const replies = ["全部都給你", "請讓我遺忘吧..."];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    await message.reply(randomReply);
  }

  if (msgContent === "doloris") {
    const replies = ["這是小祥賜給我的名字"];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    await message.reply(randomReply);
  }

  if (msgContent === "天球" || msgContent === "天球 (そら) のMúsica") {
    const replies = [
      "https://youtu.be/2Bo-ULStqLo?si=gsOfEVgbDrCB_eLY",
      "https://youtu.be/GMn4qO7zT0E?si=V6QFa14LZ7JsSm7r",
    ];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }

  if (msgContent === "顏" ) {
    const replies = [
      "https://youtu.be/i-nLb4LiXPg?si=IcsPQjv8gfngWkyp",
      "嘖"
    ];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }

  if (msgContent === "八芒星ダンス" || msgContent === "八芒星" ) {
    const replies = [
      "https://youtu.be/QtWdokSWYpo?si=BkitHw5gHVKAi4RM",
      "赤紅的象，獅子，熊，go-go insane"
    ];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }

  if (msgContent === "蜘蛛人") {
    const replies = ["https://x.com/sasakirico/status/1906922515408269605"];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }

  if (
    msgContent === "錒葉" ||
    msgContent === "四沁錒葉" ||
    msgContent === "阿鳳"
  ) {
    const replies = ["過來"];

    const selected = replies[Math.floor(Math.random() * replies.length)];

    await message.reply(selected);
  }
});

client.login(config.DISCORD_TOKEN);
