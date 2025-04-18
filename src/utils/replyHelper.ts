import { Message, MessageReplyOptions } from "discord.js";

type Reply = string | { image: string; timeout?: boolean | number } | { text: string; timeout?: boolean | number };;

export function getRandomReply(replies: Reply[]): Reply {
  return replies[Math.floor(Math.random() * replies.length)];
}

export async function sendReply(message: Message, replies: Reply[]) {
  const selected = getRandomReply(replies);

  const isObject = typeof selected !== "string";

  // Check if timeout is required
  if (isObject && selected.timeout) {
    const member = message.member;

    if (!member?.manageable || typeof member.timeout !== "function") {
      await message.reply("抱歉，我無法對您做這種事");
      return;
    }

    const duration =
      typeof selected.timeout === "number" ? selected.timeout : 60_000; // default 60s

    try {
      await member.timeout(duration, "Timed out by bot response");
    } catch (error) {
      console.error("Failed to timeout user:", error);
      return;
    }
  }

  // Send the reply
  if (typeof selected === "string") {
    await message.reply(selected);
  } else {
    let reply: MessageReplyOptions = {};
    if ("text" in selected) {
      reply.content = selected.text;
    }
    if ("image" in selected) {
      reply.files = [selected.image];
    } 
    await message.reply(reply);
  }
 
}