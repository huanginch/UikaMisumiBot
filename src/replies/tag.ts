import { Message } from "discord.js";
import { removeRole, sendReply } from "../utils/replyHelper";

const keywords = ["<@1224398179106295859>"];

const replies = [{ text: "真是隻沒禮貌的狗，別回來了", removeRole: "初華(初音)的狗" }];

export default {
  keywords,
  async execute(message: Message) {
    const selected = await sendReply(message, replies);
    if (selected.removeRole) {
      const role = selected.removeRole;

      await removeRole(message, role);
    }
  },
};
