import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["爽世", "長崎爽世"];

const replies = [
  "他是crychic的...",
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};