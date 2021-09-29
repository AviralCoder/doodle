//discord bot init
const Discord = require("discord.js");
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

//function to keep the server alive when the repl.it tab closed

const { keepServerAlive } = require("./server");

//function to run when bot is ready
bot.on("ready", () => {
	console.log(`Loggin in as ${bot.user.tag}`)
})

//what the bot will do if someone messages and the message content has some substrings...
bot.on("messageCreate", (msg) => {
	
})


keepServerAlive();
bot.login(process.env['TOKEN'])