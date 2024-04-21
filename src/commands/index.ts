import fs from "fs";
import path from "path";
import { SlashCommand } from "../types";

const foldersPath = path.join(__dirname, 'utilities');
const importCommands = () => {
  const commands: SlashCommand[] = [];
  // Read all files in the commands directory
  fs.readdirSync(foldersPath).forEach(file => {
    // Check if the file is a TypeScript file
    if (file.endsWith('.ts')) {
      // Get the file path
      const filePath = path.join(foldersPath, file);
      // Dynamically import the command module
      const command = require(filePath);
      // Check if the command has the required properties
      if ('data' in command && 'execute' in command) {
        // Add the command to the commands array
        commands.push(command);
        console.log(`[INFO] Loaded command from ${filePath}`);
      } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
      }
    }
  });
  return commands;
};

// Export the dynamically imported commands
export const commands = importCommands();