import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["amoris"];

const replies = [
  "是我們樂團的鼓手"
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};