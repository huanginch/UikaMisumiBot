import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["顏"];

const replies = [
  { text: "https://youtu.be/6umH5XQpXws?si=GqmbT4bPrtCHELuV" },
  { text: "嘖" },
  { text: "不覺得海鈴同學屁股的鏡頭有點多嗎?" },
  { text: "https://youtu.be/cVfQBLdIUXk?si=t8hKgw9LucMGk9HDF" },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
