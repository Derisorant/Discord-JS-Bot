const { SlashCommandBuilder } = require('discord.js');
const info = require("../../Information/info");
require('dotenv').config()
const { userId } = require('dotenv');

const name = info.array.map((value) => {
    return value.name.toString()
})

const description = info.array.map((value) => {
    return value.description.toString()
})

module.exports = {
	data: new SlashCommandBuilder()
		.setName(name[4])
		.setDescription(description[4]),
	async execute(interaction) {

		// Check if the user who triggered the command is you
        const yourUserId = process.env.userId;
        const userIsYou = interaction.user.id === yourUserId;

        if (!userIsYou) {
            // If it's not you, reply with a message and return
            await interaction.reply("This is a developer only command!");
            return;
        }
		
		await interaction.reply('Quitting');
        await process.exit();
	},
};