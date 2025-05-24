import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["初華", "三角初華"];

const replies = [
  { text: "你好，我是Sumimi的初華" },
  { text: "初華...對，我叫三角初華" },
  { text: "真正的初華其實是我妹妹，我奪走了他的名字與夢想" },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
