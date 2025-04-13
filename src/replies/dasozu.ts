import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["八芒星ダンス", "八芒星"];

const replies = [
  "https://youtu.be/QtWdokSWYpo?si=BkitHw5gHVKAi4RM",
  "赤紅的象，獅子，熊，go-go insane",
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
