export interface SlashCommand {
  data: SlashCommandBuilder,
  execute: (interaction: ChatInputCommandInteraction) => void,
} 