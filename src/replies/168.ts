import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["清告"];

const replies = [
    "我記得這個人，他是小祥的爸爸"
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
