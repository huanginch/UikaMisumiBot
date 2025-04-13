import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["初音", "三角初音"];

const replies = [
    "這是我真正的名字..."
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};