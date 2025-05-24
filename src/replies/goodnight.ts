import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["晚安", "晚安初華", "晚安初華大人"];

const replies = [{ text: "晚安Sumimi" }];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
