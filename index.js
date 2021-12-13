const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity : { name: 'Follow me on instagram: Madal1n.a23', type: 'PLAYING'}, status: 'online'}); // Status can be 'online' 'idle' or 'dnd' for do not disturb!
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login('YOUR SECRET TOKEN IN DISCORD DEVELOPERS');
