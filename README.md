<h1 align="center">
<br>
<img src="https://github.com/Derisorant/Discord-Bot/blob/main/assets/Discord-Help.png?raw=true" alt="Custom - Discord Bot">
<br>
Discord JS Bot
<br>
</h1>

<div align="center">
  <h4 align="center">Youtube Video Tools, Administration, Community, Bot Utility and Information.</h4>
  <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/v/discord.js.svg?maxAge=3600" alt="npm version" /></a>
  <a href="https://pm2.keymetrics.io/"><img alt="Static Badge" src="https://img.shields.io/badge/PM2%20-%20v5.3.0-%20%2302b08a?style=flat&link=https%3A%2F%2Fwww.npmjs.com%2F"></a>
  <a href="https://nodejs.org/en"><img alt="Static Badge" src="https://img.shields.io/badge/Node.js-%20v18.17.0%20-%20%238bc500?style=flat&link=https%3A%2F%2Fwww.npmjs.com%2F"></a>
 <img alt="Static Badge" src="https://img.shields.io/badge/Discord.js%20-%20v14.14.1%20-%20?style=flat&logo=discord&logoColor=ffffff&color=4752c4&link=https%3A%2F%2Fold.discordjs.dev%2F%23%2Fdocs%2Fdiscord.js%2Fmain%2Fgeneral%2Fwelcome">
</div>

# Overview 😊

Js Handler is a custom Discord Bot developed using Node.js.<br>
This is a self hosted bot, meaning that you will need to locally host and maintain this bot!

## Commands 🤖

- **Clear** | Clears the previous 10 messages.
- **Getyt** | Download Youtube Videos, mp3 files, and view video statistics.
- **SetActivity** | Set the bot activity presence.
- **Runtime** | Return the total runtime for the bot since its boot.
- **Help** | Display a list of all commands.
- **Github** | Return a custom github webpage.
- **Restart** | Restart the bot file.
- **Quit** | Force close the bot file.

# Usage 📩

#### 1. Create a [Discord Application](https://discordapp.com/developers/applications) through the Discord Developer Portal.
* After logging in, click the **New Application** button in the upper right hand corner.
* Name your application, and click **Create**.
* Click the **OAuth2** section on the left hand side.
* Note / copy your **CLIENT ID**, this is important and we will need it for later.
* Visit the **Bot** section on the left hand side.
* Click the **Add Bot** button in the top right corner.
* Click the **Yes, do it** button.
* Note / copy the bot's **TOKEN**, this is also important and we will need it for later.

#### 2. Fork / Clone this repository.
* Open command prompt.
* Locate your "**Documents**" folder and open the directory within your command prompt. Such as: `Cd Documents`.
* Type `Git clone https://github.com/Derisorant/Discord-JS-Bot` and press enter, this will create a copy of the repository in your documents folder.
* You can now close command prompt and locate the "**Discord-JS-Bot**" folder within your documents.

#### 3. Setting up the bot.
* Open the "**Discord-JS-Bot**" folder, then use `Shift + RightClick` and click "**Open with Code**".
* Within vsCode, press `Ctrl + '` to open the **Terminal**.
* Run: `Npm Install` within the terminal, this will download all the dependencies required to run the bot.
* Lastly, create a new file named `.env` in the **ROOT** of the directory, this is where you will store your **token** and **clientId**.
* Inside the "**.env**" file, paste the following: `token = yourToken` and `clientId = yourClientId`
* Simply replace the "**yourToken**" and the "**yourClientId**" with your application's token and clientId.

#### 4. Running the bot.
After placing your token and clientId within the "**.env**" file, you're ready to start running the bot!
* Within the vsCode terminal, use node to run the "**deploy-commands.js**" file. Example: `node .\src\deploy-commands.js`. This ensures the bot commands are registered, and will need to be ran whenever you add a new command.
* Now use node to run the "**app.js**" file. Example: `node .\src\app.js`.

#### Other.
If you want to host your bot using a service such as **AWS** or **Render**, please use the "**server.js**" file as the start command.
The youtube tools will also not work without a "**RapidAPI Key**". If you plan on using the youtube tools, please refer to the following link: [Youtube API](https://rapidapi.com/ytjar/api/ytstream-download-youtube-videos)
