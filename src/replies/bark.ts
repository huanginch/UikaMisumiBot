import { Message } from "discord.js";
import { sendReply, timeoutUser } from "../utils/replyHelper";

const keywords = [/^汪+$/];

const replies = [{ text: "閉嘴", timeout: 600_000 }];

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
