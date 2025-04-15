import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["地下室", "初華的地下室"];

const replies = [
  "什麼?! 我家怎麼可能有那種東西，是誰說的? 好過分...",
  { text: "我怎麼可能有那種東西?! 你說那這裡呢...", timeout: true },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
