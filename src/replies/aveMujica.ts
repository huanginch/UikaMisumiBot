import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["ave mujica"];

const replies = [
  "小祥可以邀請我，真的好開心",
  "我想和小祥在一起的願望，已經實現了",
  "https://www.youtube.com/watch?v=QDsd0nyzwz0",
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
