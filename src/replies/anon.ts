import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["愛音", "千早愛音"];

const replies = [
  "是之前和小燈走在一起的女生",
  {
    image: path.join(__dirname, "../assets", "anon.png"),
  },
  {
    image: path.join(__dirname, "../assets", "anon2.png"),
  },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
