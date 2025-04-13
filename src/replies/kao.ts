import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["顏"];

const replies = ["https://youtu.be/i-nLb4LiXPg?si=IcsPQjv8gfngWkyp", "嘖"];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
