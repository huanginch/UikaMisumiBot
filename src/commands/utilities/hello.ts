import { CommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Replies with hello'),
  async execute(interaction: CommandInteraction) {
    await interaction.reply('hello');
  },
};