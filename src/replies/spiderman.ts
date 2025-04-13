import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["蜘蛛人"];

const replies = ["https://x.com/sasakirico/status/1906922515408269605"];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
