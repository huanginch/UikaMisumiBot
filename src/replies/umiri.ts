import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["海鈴", "八幡海鈴"];

const replies = ["海鈴同學跟立希同學的感情好像很好呢", "是我們樂團的BASS手"];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
