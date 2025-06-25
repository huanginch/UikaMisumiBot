import { Message } from "discord.js";
import { sendReply, timeoutUser } from "../utils/replyHelper";

const keywords = [/^生日快樂+$/];

const replies = [
  { text: "謝謝你" },
  { text: "謝謝你，也給你回禮", timeout: 86400_000 },
];

export default {
  keywords,
  async execute(message: Message) {
    const selected =await sendReply(message, replies);

    if (selected.timeout) {
      const duration =
        typeof selected.timeout === "number" ? selected.timeout : undefined;

      await timeoutUser(message, duration);
    }
  },
};
