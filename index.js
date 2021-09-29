//discord bot init
const Discord = require("discord.js");
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

//axios
const axios = require("axios");

//imports
const { PREFIX, BOT_URL, GITHUB_REPO } = require("./library/constants")

//function to keep the server alive when the repl.it tab closed
const { keepServerAlive } = require("./server");

//random function
const { random } = require("./functions/random")

//function to run when bot is ready
bot.on("ready", () => {
	console.log(`Logged in as ${bot.user.tag}`);
	//code to change the
	let status = 1;

})

//what the bot will do if someone messages and the message content has some substrings...
bot.on("messageCreate", (msg) => {

	if(msg.author.id === "861925837691551794"){
		msg.reply("cry baby")
	}

	if(msg.content.toLowerCase().startsWith(PREFIX) === true){
		switch (msg.content){
			//if someone types info after prefix, what to reply.. - 
			case `${PREFIX}info`:
				msg.reply(`Oh! Hi, I am Doodle, the Discord bot! Happy to meet you! Want to contribute to this project? You can! The GitHub repo URL is this - ${GITHUB_REPO}, want to add this to your own server? ${BOT_URL}`)

				break;
			case `${PREFIX}source`:
				msg.reply(`Doodle is open source! So, you can contribute - ${GITHUB_REPO}`)

				break;

			case `${PREFIX}help`:
				msg.reply("This command is currently not available.")

				break;

			case `${PREFIX}suicide`:
				msg.reply(`${msg.author} just killed himself!`)

			case `${PREFIX}inspire`:
				axios
					.get("https://api.quotable.io/random")
					.then(response => {
						msg.reply(`${response.data.content} - ${response.data.author}`)
					})

			default:
				if (msg.content.toLowerCase().includes(`${PREFIX}kill`) === true) {
					const getWhoToKill = msg.content.replace(`${PREFIX}kill`, "");

					if (getWhoToKill === "") {
						msg.reply(`${msg.author} just died!`);
					} else {
						msg.reply(
							`${msg.author} killed ${getWhoToKill}. Sad! :(`
						);
					}
            	} else if (msg.content.toLowerCase().includes(`${PREFIX}ship`) === true){
					const mentions = {
						person1: msg.mentions.users.first(),
						person2: msg.mentions.users.last(),
					}

					const randomNumber = random(1,99)

					msg.reply(`${mentions.person1} **and** ${mentions.person2}\n _Love: ${randomNumber}%_`);
				}
		}
	}
})


keepServerAlive();
bot.login(process.env['TOKEN'])