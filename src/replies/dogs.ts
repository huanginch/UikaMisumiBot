import path from "path";
import { Message } from "discord.js";
import { sendReply, timeoutUser } from "../utils/replyHelper";

const keywords = ["錒葉", "阿鳳", "哈士堡", "方塊"];

const replies = [
  { text: "過來" },
  { text: "乖狗狗" },
  { text: "...", timeout: true },
];

export default {
  keywords,
  async execute(message: Message) {
    const selected = await sendReply(message, replies);

    if (selected.timeout) {
      const duration =
        typeof selected.timeout === "number" ? selected.timeout : undefined;

      await timeoutUser(message, duration);
    }
  },
};
