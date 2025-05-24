import { Message } from "discord.js";
import { sendReply } from "../utils/replyHelper";

const keywords = ["春日影"];

const replies = [
  { text: "他現在是mygo的歌了，不是crychic的，太好了\nhttps://youtu.be/ZsvJUh03MwI?si=PZuZONXtt6GlhGLa" },
  {text: "..."}
];

export default {
  keywords,
  async execute(message: Message) {
    await sendReply(message, replies);
  },
};