const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
  if (message.content === '!help') {
    message.channel.send('List of available commands: !register, !createTournament, !selectGame, !generateBracket, !findOpponent, !liveStream, !chat, !leaderboard, !setPrizePool');
  }
});

client.login('YOUR_DISCORD_BOT_TOKEN_HERE');

module.exports = client;