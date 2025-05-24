import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["georgette me, georgette you"];

const replies = [
  { text: "https://youtu.be/vKDa7yfpd2M?si=z9j8GFcZ3CGmImaS" },
  { text: "https://youtu.be/S4ErGLKCNCY?si=I6gOsJPFyzBECjc7" },
  { text: "順著白銀的絲線將思緒拉近" },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
