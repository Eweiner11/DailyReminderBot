require('dotenv').config()
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const {scheduleReminder} = require('./tools/scheduleReminder')


const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessageReactions,
      641,
    ],
  });


client.on('ready', async client => {
  console.log('Bot is running!')
    const channel = await client.channels.cache.get(process.env.ASYNC_LEARNING_CHANNEL_ID)
    scheduleReminder(10,30,channel) //hours: 0-23, minutes :1-59
})

client.login(process.env.CLIENT_TOKEN);