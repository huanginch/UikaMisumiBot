import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["timoris"];

const replies = [
  "這是小祥賜給我的名字，真是詩情畫意呢，真不愧是小祥",
  "我，無畏悲傷"
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
