const {EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data:new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Return an embed'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('Have you studied yet??')
            .setDescription('Keeping you honest since 92')
            .setColor(0x3399FF)
            .setImage(client.user.displayAvatarURL())
    }

}