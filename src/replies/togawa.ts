import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["豐川", "豐川家"];

const replies = [
  { text: "我不能說..." },
  {
    text: "小時候母親總是叮嚀我不能靠近豐川家的大宅，但我也是在那裡遇見了小祥",
  },
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
