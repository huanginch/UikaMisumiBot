import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["小祥", "祥", "祥子"];

const replies = [
  { text: "小祥小祥小祥小祥小祥小祥小祥！！！" },
  {
    text:
      "（陰暗的爬行）（尖叫）（扭曲）（陰暗的爬行）（尖叫）（扭曲）（陰暗的爬行）" +
      "（尖叫）（爬行）（扭動）（分裂）（陰暗地蠕動）（翻滾）（激烈地爬動）" +
      "（扭曲）（痙攣）（嘶吼）（蠕動）（陰森的低吼）（爬行）（分裂）（走上岸）（扭動）（痙攣）（蠕動）（扭曲的行走）（撲向小祥）",
  },
  {
    text:
      "You know, I 汪, I 汪\n" +
      "I want, I want you, so\n" +
      "I want, いなければよかったのに\n" +
      "なぜ you know, you know\n" +
      "You know, you know I want you to know\n" +
      "How much I need you so, いま 狂おしいほど",
  },
  { text: "汪" },
  { text: "小祥說我和月亮一樣溫柔" },
  {
    image: path.join(
      __dirname,
      "../assets",
      "5E0083457C1A8D1ECA761598F2D7D4EF.gif"
    ),
  },
  {
    image: path.join(__dirname, "../assets", "saki....gif"),
  },
  { image: path.join(__dirname, "../assets", "250316_uika.gif") },
  {
    image: "https://media.tenor.com/sacoouDcJIcAAAAM/ave-mujica-bang-dream.gif",
  },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
