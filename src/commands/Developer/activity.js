const { SlashCommandBuilder, EmbedBuilder, Client, Collection, Events, GatewayIntentBits, ActivityType, PermissionsBitField } = require('discord.js');
const info = require("../../Information/info");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('dotenv').config()
const { userId, token } = require('dotenv');


const name = info.array.map((value) => {
  return value.name.toString()
})

const description = info.array.map((value) => {
  return value.description.toString()
})

module.exports = {
  data: new SlashCommandBuilder()
    .setName(name[7])
    .setDescription(description[7])
    .addStringOption(option => option.setName('name').setDescription('The name of the Activity').setRequired(true)),

  async execute(interaction) {

    // Check if the user who triggered the command is you
    const yourUserId = process.env.userId;
    const userIsYou = interaction.user.id === yourUserId;

    if (!userIsYou) {
      // If it's not you, reply with a message and return
      await interaction.reply("This is a developer only command!");
      return;
    }

    const { options } = interaction;
    exports.activity = options.getString('name');

    const embed = new EmbedBuilder()
      .setColor("Blurple")
      .setDescription(`🔧 Updating the bot Activity to \`${exports.activity}\``)

    await interaction.reply({ embeds: [embed] });

    if (exports.activity == undefined) {
      client.user.setActivity('/Help', {
        type: ActivityType.Listening
      })
    } else {
      client.user.setActivity(exports.activity + ' | /Help', {
        type: ActivityType.Listening
      }),
        console.log(`User has changed the bot status to ${exports.activity}`)
    };
  },
};



// client.on('ready', (c) => {

//     setInterval(() => {

//         if ( this.activity == undefined  ) {
//             client.user.setActivity('/Help', {
//                 type: ActivityType.Listening
//             })
//         } else {
//         client.user.setActivity(this.activity + ' | /Help', {
//             type: ActivityType.Listening
//         }),
//         console.log(`User has changed the bot status to ${this.activity}`)
//     }
//     }, 10000);
// })

client.login(process.env.token);

