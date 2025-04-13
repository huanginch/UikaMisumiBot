import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["閣樓"];

const replies = [
    "為了小祥，我的閣樓一直空著"
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};