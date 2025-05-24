import { Message, MessageReplyOptions } from "discord.js";

type Reply = {
  text?: string;
  image?: string;
  timeout?: boolean | number;
  removeRole?: string;
};

export function getRandomReply(replies: Reply[]): Reply {
  return replies[Math.floor(Math.random() * replies.length)];
}

export async function sendReply(message: Message, replies: Reply[]) {
  const selected = getRandomReply(replies);

  // Send the reply
  if (selected.text) {
    await message.reply(selected.text);
  } else {
    let reply: MessageReplyOptions = {};
    if (selected.image) {
      reply.files = [selected.image];
    }
    await message.reply(reply);
  }

  // Return the selected reply in case caller wants to handle more (like timeout)
  return selected;
}

export async function timeoutUser(
  message: Message,
  duration?: number
): Promise<boolean> {
  const member = message.member;

  if (!member?.manageable || typeof member.timeout !== "function") {
    await message.reply("抱歉，我無法對您做這種事");
    return false;
  }

  const time = duration ?? 60_000;

  try {
    await member.timeout(time, "Timed out by bot response");
    return true;
  } catch (error) {
    console.error("Failed to timeout user:", error);
    return false;
  }
}

export async function removeRole(
  message: Message,
  roleIdentifier: string
) {
  const member = message.member;
  if (!member) {
    console.error("找不到使用者");
    return;
  }

  const role =
    message.guild?.roles.cache.find(
      (r) => r.id === roleIdentifier || r.name === roleIdentifier
    ) ?? null;

  if (!role) {
    console.error(`無法找到指定的身分組: ${roleIdentifier}`);
    return;
  }

  if (!member.roles.cache.has(role.id)) {
    console.error(`該使用者沒有這個身分組：${role.name}`);
    return;
  }

  try {
    await member.roles.remove(role);
    await console.log(`已將身分組 ${role.name} 移除`);
  } catch (error) {
    console.error("移除身分組失敗:", error);
    await message.reply("抱歉，無法移除身分組");
  }
}
