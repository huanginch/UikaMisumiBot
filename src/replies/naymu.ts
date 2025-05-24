import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["喵夢", "祐天寺若麥", "若麥"];

const replies = [
  {
    text: "啊...擅自把我寫的歌詞...",
    image: path.join(__dirname, "../assets", "歌詞.png"),
  },
  { text: "是我們樂團的鼓手" },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
