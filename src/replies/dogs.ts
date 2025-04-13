import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["錒葉", "四沁錒葉", "阿鳳"];

const replies = ["過來"];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
