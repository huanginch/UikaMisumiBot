import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["小島", "島", "家"];

const replies = [
  "我的家在一座小島上，小時候我在那座島上遇見了小祥",
  "我在那座島上和小祥一起看了星星",
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};