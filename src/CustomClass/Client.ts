import { Client, ClientOptions, Collection } from "discord.js";
import { SlashCommand } from "../types";

class CustomClient extends Client {
  slashCommands: Collection<string, SlashCommand>;

  constructor(options: ClientOptions) {
    super(options);
    this.slashCommands = new Collection<string, SlashCommand>();
  }
}

export { CustomClient };