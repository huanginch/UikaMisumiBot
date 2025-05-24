import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["布丁"];

const replies = [{ text: "小祥，你要吃布丁嗎?" }];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
