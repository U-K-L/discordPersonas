// index.mjs or index.js (if "type": "module" is in package.json)
import { Client, GatewayIntentBits, Events } from 'discord.js';

// Replace 'YOUR_BOT_TOKEN' with the token from the Discord Developer Portal.
const TOKEN = process.env.KANALOATOKEN;

// Create a new client instance with the necessary intents.
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,        // For guild-related events
    GatewayIntentBits.GuildMessages, // For message events in guilds
    GatewayIntentBits.MessageContent // To read the content of messages
  ]
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Listen for messages
client.on(Events.MessageCreate, message => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Check if the message content is exactly '!hello'
  if (message.content === '!hello') {
    // Send "hello" to the same channel
    message.channel.send('hello');
  }
});

// Log in to Discord with your bot's token
client.login(TOKEN);
