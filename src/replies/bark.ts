import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["汪", "汪汪"];

const replies = [{text: "閉嘴", timeout: 600_000}];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};