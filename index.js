//discord bot init
const Discord = require("discord.js");
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

//imports
const { PREFIX } = require("./library/constants")

//function to keep the server alive when the repl.it tab closed
const { keepServerAlive } = require("./server");

//function to run when bot is ready
bot.on("ready", () => {
	console.log(`Loggin in as ${bot.user.tag}`)
})

//what the bot will do if someone messages and the message content has some substrings...
bot.on("messageCreate", (msg) => {
	if(msg.content.startsWith(PREFIX) === true){
		switch (msg.content){
			case `${PREFIX}info`:
				msg.reply("Oh! Hi, I am Doodle, the Discord bot! Happy to meet you!")
		}
	}
})


keepServerAlive();
bot.login(process.env['TOKEN'])