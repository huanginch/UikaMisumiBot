import { Message } from "discord.js";
import path from "path";

type Reply = string | { image: string };

export function getRandomReply(replies: Reply[]): Reply {
  return replies[Math.floor(Math.random() * replies.length)];
}

export async function sendReply(message: Message, replies: Reply[]) {
  const selected = getRandomReply(replies);

  if (typeof selected === "string") {
    await message.reply(selected);
  } else {
    await message.reply({ files: [selected.image] });
  }
}