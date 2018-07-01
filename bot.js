const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});






client.login('NDYyNzM5NTI0OTA1MDc0NzI5.DhmqkA.VvS9bJQMMrufp4cIuwPD-Gxki2A');
