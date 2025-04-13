import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["小睦", "睦"];

const replies = [
  "不要把小祥從我身邊搶走!!!",
  "是我們樂團的吉他手",
  {
    image: path.join(__dirname, "assets", "不要把小祥從我身邊搶走.gif"),
  },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
