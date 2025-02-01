// src/index.js
import http from 'http';
import { Client, GatewayIntentBits, Events } from 'discord.js';

// Start a minimal HTTP server so Railway's health check passes.
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running!');
}).listen(PORT, () => console.log(`HTTP server is running on port ${PORT}`));

// Access your Discord bot token from an environment variable (e.g., KANALOATOKEN).
const TOKEN = process.env.KANALOATOKEN;
if (!TOKEN) {
  console.error('Error: Discord token is missing. Ensure KANALOATOKEN is set.');
  process.exit(1);
}

// Create a new Discord client instance with the necessary intents.
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// When the client is ready, log a message.
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Listen for messages and respond to !hello.
client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;
  if (message.content === '!hello') {
    message.channel.send('hello');
  }
});

// Log in to Discord with your token.
client.login(TOKEN).catch(error => {
  console.error('Error logging in:', error);
});
