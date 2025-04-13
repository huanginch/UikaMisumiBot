import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["crychic"];

const replies = ["好忌妒，小燈"];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
