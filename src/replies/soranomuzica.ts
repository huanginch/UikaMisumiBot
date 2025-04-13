import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["天球", "天球 (そら) のMúsica"];

const replies = [
    "https://youtu.be/2Bo-ULStqLo?si=gsOfEVgbDrCB_eLY",
    "https://youtu.be/GMn4qO7zT0E?si=V6QFa14LZ7JsSm7r",
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
