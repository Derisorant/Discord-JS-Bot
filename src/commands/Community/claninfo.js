const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');
const info = require("../../Information/info");
const https = require('https');

const name = info.array.map((value) => {
  return value.name.toString()
})

const description = info.array.map((value) => {
  return value.description.toString()
})


module.exports = {
  data: new SlashCommandBuilder()
    .setName(name[8])
    .setDescription(description[8])
    .addStringOption(option => option.setName('clan-name').setDescription('The name of the clan you want to view.').setRequired(true)),

  async execute(interaction) {

    const { options } = interaction;
    const clanName = options.getString('clan-name');

    var name;
    var description;
    var depositedDiamonds;
    var level;
    var members;
    var status;

    const requestOptions = {
      hostname: 'biggamesapi.io',
      port: 443,
      path: '/api/clan/' + clanName,
      method: 'GET',
    };

    const req = https.request(requestOptions, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const result = JSON.parse(data);
        name = result.data.Name;
        description = result.data.Desc;
        depositedDiamonds = result.data.DepositedDiamonds;
        level = result.data.GuildLevel;
        status = result.data.Status;

        const embed = new EmbedBuilder()
            .setColor("Blurple")
            .setTitle(`**${name}** Clan`)
            .setAuthor({ name: 'JS Handler', iconURL: 'https://github.com/Derisorant/DBAssets/blob/main/Embed/Profile.png?raw=true' })
            .setDescription(`**Clan Description:** *${description}*`)
            .addFields(
                { name: 'Total Diamonds', value: `${depositedDiamonds} `, inline: true },
                { name: 'Clan Level', value: `${level}`, inline: true },
            )
             interaction.reply({ embeds: [embed] });

            //  interaction.reply().catch(console.error);
      });
    });

    // Handle request errors
    req.on('error', (error) => {
      console.error(error);
    });

    // End the request
    req.end();
  },
};