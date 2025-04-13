import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["初華", "三角初華"];

const replies = [
  "你好，我是Sumimi的初華",
  "初華...對，我叫三角初華",
  "真正的初華其實是我妹妹",
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
