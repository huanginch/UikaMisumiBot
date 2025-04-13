import { CommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName('說明')
    .setDescription('機器人使用說明'),
  async execute(interaction: CommandInteraction) {
    await interaction.reply('輸入特定文字初華會回覆你喔');
  },
};