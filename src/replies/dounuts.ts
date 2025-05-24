import path from "path";
import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["甜甜圈"];

const replies = [{ text: "甜甜圈...真奈很喜歡呢" }];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};
