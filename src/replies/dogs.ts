import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["錒葉", "阿鳳", "哈士堡", "方塊"];

const replies = ["過來", "乖狗狗", {text: "...", timeout: true}];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
