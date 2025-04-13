export interface SlashCommand {
  data: SlashCommandBuilder,
  execute: (interaction: ChatInputCommandInteraction) => void,
} 

export type Reply = {
  keywords: string[];
  execute: (message: Message) => void | Promise<void>;
};