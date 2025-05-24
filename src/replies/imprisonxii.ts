import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["imprisonedxii", "imprisoned xii"];

const replies = [
  { text: "這是我寫給小祥的歌...小祥..." },
  { text: "小祥竟然為那樣的歌詞寫了那麼美的曲子" },
  { text: "https://youtu.be/0YNMV7xljD4?si=MK3xrLfhFjQR6O8l" },
  { text: "https://youtu.be/1_0LTMNKYGo?si=0er0a7UkFFyvw0V8" },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
