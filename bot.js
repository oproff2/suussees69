const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NzU4NzY3MDEwNzc0NjQ2Nzg0.X2zu2A.ckQK4j_cmadIUvtKh0StIsJCQ1c);//where BOT_TOKEN is the token of our bot
