import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["mortis"];

const replies = [{ text: "是我們樂團的吉他手，但他卻說他不會彈吉他" }];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
