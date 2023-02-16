require('dotenv').config()
const { Client, GatewayIntentBits,EmbedBuilder } = require('discord.js');
const schedule = require('node-schedule');

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
    const rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = [ new schedule.Range(1, 5)];
    rule.hour = 18;
    rule.minute = 31;
    const channel = await client.channels.cache.get(process.env.ASYNC_LEARNING_CHANNEL_ID)
    const job = schedule.scheduleJob(rule, function(){
        channel.send('**Have you studied yet?**')
      });
})

client.login(process.env.CLIENT_TOKEN);