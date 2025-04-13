import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["killkiss"];

const replies = [
  "多麼可笑...",
  "https://youtu.be/FWXkipC-vqs?si=1iyiQOBdMvIs4SSp",
  "https://www.youtube.com/watch?v=W0DCsoJPCa8",
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
