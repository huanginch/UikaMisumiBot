import { Message } from "discord.js";
import path from "path";

type Reply = string | { image: string; timeout?: boolean } | { text: string; timeout?: boolean };;

export function getRandomReply(replies: Reply[]): Reply {
  return replies[Math.floor(Math.random() * replies.length)];
}

export async function sendReply(message: Message, replies: Reply[]) {
  const selected = getRandomReply(replies);

  if (typeof selected === "string") {
    await message.reply(selected);
  } else if ("image" in selected) {
    await message.reply({ files: [selected.image] });
  } else if ("text" in selected) {
    await message.reply(selected.text);
  }

  // handle timeout
  if (typeof selected !== "string" && selected.timeout) {
    const member = message.member;
    if (member?.manageable && member.timeout) {
      const duration = 60_000; // 1 minute timeout
      try {
        await member.timeout(duration, "Timed out by bot response");
      } catch (error) {
        console.error("Failed to timeout user:", error);
      }
    }
  }
}