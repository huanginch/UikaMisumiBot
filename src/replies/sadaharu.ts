import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["定治"];

const replies = [{ text: "我不能說..." }, { text: "他..." }];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
