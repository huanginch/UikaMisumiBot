import path from "path";
import { Message } from "discord.js";
import { sendReply, timeoutUser } from "../utils/replyHelper";

const keywords = ["地下室", "初華的地下室"];

const replies = [
  { text: "什麼？！ 我家怎麼可能有那種東西，是誰說的? 好過分..." },
  { text: "我怎麼可能有那種東西？！ 你說那這裡呢...", timeout: true },
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
