import { ChatInputCommandInteraction, CacheType, Client } from "discord.js";
import { CustomClient } from "./Client";

class CustomInteraction extends ChatInputCommandInteraction<CacheType> {
  constructor(client: CustomClient, data: any) {
    super(client, data);
  }
}