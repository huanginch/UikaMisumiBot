import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["主人", "初華大人"];

const replies = [
  "嘖",
  {
    image: path.join(
      __dirname,
      "../assets",
      "2025-03-04_17-40-01-ezgif.com-optimize.gif"
    ),
  },
  {
    image: path.join(
      __dirname,
      "../assets",
      "2025-03-04_17-40-01_1-ezgif.com-optimize.gif"
    ),
  },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
