import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["killkiss"];

const replies = [
  { text: "多麼可笑..." },
  { text: "https://youtu.be/FWXkipC-vqs?si=1iyiQOBdMvIs4SSp" },
  { text: "https://www.youtube.com/watch?v=W0DCsoJPCa8" },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
