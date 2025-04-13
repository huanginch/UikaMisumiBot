import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["小燈", "燈"];

const replies = [
  "再這樣下去小祥會被小燈搶走的...",
  "他是crychic的...",
  {
    image: "https://media1.tenor.com/m/knBIy1g_ooAAAAAd/bandori-bang-dream.gif",
  },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
