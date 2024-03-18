const { SlashCommandBuilder, IntentsBitField, PermissionsBitField } = require('discord.js');
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
    .setName(name[5])
    .setDescription(description[5]),
  async execute(interaction, message) {
    if (!interaction.member.permissionsIn(interaction.channel).has(PermissionsBitField.Flags.Administrator)) {
      await interaction.reply("You must be an administrator to perform this action.");
      return;
    }

    // If the user is an administrator, delete the messages.
    const channel = interaction.channel;
    await interaction.reply("Deleting...");

    // Simulate a delay of 1 second
    var delayInMilliseconds = 1000;
    setTimeout(function () {
      // Bulk delete the last 11 messages (including the command itself)
      channel.bulkDelete(11);
    }, delayInMilliseconds);
  },
};