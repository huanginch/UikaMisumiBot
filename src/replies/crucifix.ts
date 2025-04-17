import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["crucifix x", "crucifixx"];

const replies = ["still alive", "https://youtu.be/XP8al1l38Po?si=CXDUc5BcPuLrRCkw", "https://youtu.be/v-dKrhA6_i0?si=HUJOPt9Uy3ArmKJr"];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};