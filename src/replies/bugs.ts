import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["蟲", "蜘蛛"];

const replies = [
 "我其實很害怕蟲，喜歡蟲的是真正的初華..."
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
