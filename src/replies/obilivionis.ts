import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["obilivionis"];

const replies = [
  { text: "全都給你" },
  { text: "請讓我遺忘吧..." },
  { text: "小祥...❤️" },
  {
    image: path.join(__dirname, "../assets", "allgivetoyou.png"),
  },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
