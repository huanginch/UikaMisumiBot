import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["真奈", "純田真奈"];

const replies = ["...", "說到真奈就會想到甜甜圈呢"];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
