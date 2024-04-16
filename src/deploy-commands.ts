import { REST, Routes } from "discord.js";
import { commands } from "./commands";
import { config } from "./config";

const commandsData: object[] = [];
commands.forEach(command => {
  commandsData.push(command.data.toJSON());
});

const rest = new REST().setToken(config.DISCORD_TOKEN);

type DeployCommandsProps = {
  guildId: string | undefined;
};

export async function deployCommands({ guildId }: DeployCommandsProps) {
  try {
    console.log("Started refreshing application (/) commands.");
    if (!guildId) {
      console.log("No guild ID provided. Global commands will be updated.");
      return;
    }

    await rest.put(
      Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guildId),
      {
        body: commandsData,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}