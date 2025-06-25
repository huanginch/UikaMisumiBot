import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = [/^生日快樂+$/];

const replies = [{ text: "謝謝你" }, { text: "謝謝你，也給你的回禮", timeout: 86400_000 }];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
