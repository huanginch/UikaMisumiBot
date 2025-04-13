import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["星星"];

const replies = [
  "我很喜歡星星，這是我唯一和小祥的回憶",
  "織女星，牛郎星，獵戶座，夏季大三角",
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
