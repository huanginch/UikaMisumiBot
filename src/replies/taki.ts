import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["立希", "椎名立希"];

const replies = [
  { text: "立希同學...是crychic裡的那個鼓手呢" },
  { text: "上次打斷他和海鈴同學說話，有點不太好意思" },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
