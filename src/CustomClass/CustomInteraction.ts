import { ChatInputCommandInteraction, CacheType, Client } from 'discord.js';
import { RawInteractionData } from 'discord.js/typings/rawDataTypes';

class CustomInteaction extends ChatInputCommandInteraction {
  constructor(client: Client<true>, data: RawInteractionData) {
    super(client, data);
  }
}