//discord bot init
const Discord = require("discord.js");
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

//axios
const axios = require("axios");

//imports
const { PREFIX, BOT_URL, GITHUB_REPO, BULLY_PHRASES } = require("./library/constants")

//function to keep the server alive when the repl.it tab closed
const { keepServerAlive } = require("./server");

//function to generate placeholders
const { generatePlaceholder } = require("./functions/generatePlaceholder");

//random function
const { random } = require("./functions/random")

//function to run when bot is ready
bot.on("ready", () => {
	console.log(`Logged in as ${bot.user.tag}`);
	//code to change the
	let status = 1;

})

//the placeholders that will come while fetching the data using axios
const fetch_placeholders = {
	meme: generatePlaceholder("meme"),
	cat: generatePlaceholder("cat picture"),
	dog: generatePlaceholder("dog picture")
}

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

				break;

			case `${PREFIX}inspire`:
				axios
					.get("https://api.quotable.io/random")
					.then(response => {
						msg.reply(`${response.data.content} - ${response.data.author}`)
					})

				break;

			case `${PREFIX}meme`:
			msg.reply(fetch_placeholders.meme).then(sentMessage => {
				axios
                    .get("https://meme-api.herokuapp.com/gimme/1")
                    .then((response) => {
                        sentMessage.edit(response.data.memes[0].preview[3]);
                    });
			})

				break;

			case `${PREFIX}cat`:
				msg.reply(fetch_placeholders.cat).then((sentMessage) => {
					axios
						.get(
							"https://api.thecatapi.com/v1/images/search?breed_ids=beng&include_breeds=true"
						)
						.then((response) => {
							sentMessage.edit(response.data[0].url);
						});
				});

				break;

			case `${PREFIX}dog`:
				msg.reply(fetch_placeholders.dog).then((sentMessage) => {
					axios
						.get("https://dog.ceo/api/breeds/image/random")
						.then((response) => {
							sentMessage.edit(response.data.message);
						});
				});

				break;


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
            	}
				if (msg.content.toLowerCase().includes(`${PREFIX}ship`) === true){
					const mentions = {
						person1: msg.mentions.users.first(),
						person2: msg.mentions.users.last(),
					}

					const randomNumber = random(1,99)

					msg.reply(`${mentions.person1} **and** ${mentions.person2}\n _Love: ${randomNumber}%_`);
				}

				if (msg.content.toLowerCase().includes(`${PREFIX}troll`)){
					if (msg.member.roles.cache.has("892752234939547659") || msg.author.id === "790196001008910337"){
						let personToTroll = msg.mentions.users.first();
						let personWhoSentTheCommand = msg.author

						if (personToTroll === undefined){
							msg.reply("Please mention someone to troll! :)")
						}else{
							msg.reply(`Now, I will troll ${personToTroll} in every common server until ${personWhoSentTheCommand} writes \`$bullystop\`! And yes, ${personToTroll} please blame ${personWhoSentTheCommand} for your bully!`);
						}

						let trolling = true;


						bot.on("messageCreate", (message) => {
							if (message.author === personToTroll && trolling === true){
								const randomNum = random(1, BULLY_PHRASES.length);
								message.reply(BULLY_PHRASES[randomNum]);
							}

							if (message.author === personWhoSentTheCommand && message.content === `${PREFIX}bullystop`){
								message.reply(`I won't troll ${personToTroll} anymore! :)`)
								trolling = false;
								personToTroll = undefined;
								personWhoSentTheCommand = undefined;
							}
						})
					}else{
						msg.reply("You can't troll anyone sorry. :(")
					}
					
				}
		}
	}
})


keepServerAlive();
bot.login(process.env['TOKEN'])