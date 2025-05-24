import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["crychic"];

const replies = [{ text: "好忌妒，小燈" }, { text: "為什麼當初陪在小祥身邊的不是我..." }];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
