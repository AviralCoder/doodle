//discord bot init
const Discord = require("discord.js");
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

//axios
const axios = require("axios");

//message embed
const { MessageEmbed } = require("discord.js")

//imports
const { PREFIX, BOT_URL, GITHUB_REPO, BULLY_PHRASES, feedbackGood, feedbackBad } = require("./library/constants")

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
	dog: generatePlaceholder("dog picture"),
	mars: generatePlaceholder("mars picture")
}

//what the bot will do if someone messages and the message content has some substrings...
bot.on("messageCreate", (msg) => {

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

			case `${PREFIX}deleteserver`:
				msg.reply("**This server is going to be deleted in 10 seconds!!** 😩")

				const timeout = setTimeout(() => {
					msg.channel.send("HAHAHA LOL IT WAS TROLL! Rip to all dumb people who got scared.. XD");
					clearTimeout(timeout);
				},10000)
				break;

			case `${PREFIX}bored`:
				msg.reply("Finding a fun activity for you..").then(messageToEdit => {
					axios
						.get("https://www.boredapi.com/api/activity")
						.then(response => {
							const boredEmbed = new MessageEmbed()
								.setColor('#6bcc58')
								.setTitle("Bored?")
								.setDescription(response.data.activity)
								.setAuthor(msg.author.username, msg.author.displayAvatarURL())
								.addFields(
									{name: "Type", value: response.data.type, inline: true},
									{name: "Participants", value: response.data.participants.toString(), inline: true },
									{name: "Price", value: response.data.price.toString(), inline: true}
								)
							
							messageToEdit.edit({ embeds: [boredEmbed], content: "Found!" });
						})
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
            	}
				if (msg.content.toLowerCase().includes(`${PREFIX}ship`) === true){
					const mentions = {
						person1: msg.mentions.users.first(),
						person2: msg.mentions.users.last(),
					}

					const randomNumber = random(1,101)

					msg.reply(`${mentions.person1} **and** ${mentions.person2}\n _Love: ${randomNumber}%_`);
				}

				if (msg.content.toLowerCase().includes(`${PREFIX}troll`)){
						if (msg.member.roles.cache.has("892752234939547659") || msg.author.id === "790196001008910337"){
							let personToTroll = msg.mentions.users.first();
							if (personToTroll.id !== "892658773989142548"){
								let personWhoSentTheCommand = msg.author

								if (personToTroll === undefined){
									msg.reply("Please mention someone to troll! :)")
								}else{
									msg.reply(`Now, I will troll ${personToTroll} in every common server until ${personWhoSentTheCommand} writes \`$bullystop\`! And yes, ${personToTroll} please blame ${personWhoSentTheCommand} for your bully!`);
								}

								let trolling = true;



								bot.on("messageCreate", (message) => {
									
									const stopTrolling = () => {
										trolling = false;
										personToTroll = undefined;
										personWhoSentTheCommand = undefined;
									}

									if (!message.content.includes("😭")){
										if (message.author === personToTroll && trolling === true){
											const randomNum = random(1, BULLY_PHRASES.length - 1);
											message.reply(BULLY_PHRASES[randomNum]);
										}

										if (message.author === personWhoSentTheCommand && message.content === `${PREFIX}bullystop`){
											message.reply(`I won't troll ${personToTroll} anymore! :)`)
											stopTrolling();
										}
									}else{
										message.channel.send(`${personWhoSentTheCommand}, Sorry but I have to stop trolling as I don't mean to hurt anyone and I can clearly see that ${personToTroll} is not liking this. :)`)
										stopTrolling();
									}
								})
							}else{
								msg.reply("Sorry, I can't troll myself, this is going to lead into an infinite loop. ;)")
							}
						}else{
							msg.reply("You can't troll anyone sorry. :(")
						}
					
				}

				if (msg.content.toLowerCase().includes(`${PREFIX}feedback`)){
					let personWhoIsFeedbackWillCome = msg.mentions.users.first().username;


					if (!personWhoIsFeedbackWillCome){
						msg.reply("I would like to give feedback about someone! So, please mention someone to give feedback")
					}else{
						let positive_or_negative = "positive";

						const randomNumberForFeedback = random(1,99);

						randomNumberForFeedback > 1 && randomNumberForFeedback <= 50
							? positive_or_negative = "positive"
							: positive_or_negative = "negative"

						const randomNumToChooseFeedback = random(1, feedbackGood.length - 1)

						if (positive_or_negative === "positive"){
							const feedbackPos = new MessageEmbed()
								.setColor('#6bcc58')
								.setTitle(`Feedback for ${personWhoIsFeedbackWillCome}`)
								.setDescription(`${feedbackGood[randomNumToChooseFeedback]}`)

							msg.channel.send({ embeds: [feedbackPos] });
						}else if (positive_or_negative === "negative"){
							const feedbackNeg = new MessageEmbed()
								.setColor('#6bcc58')
								.setTitle(`Feedback for ${personWhoIsFeedbackWillCome}`)
								.setDescription(`${feedbackBad[randomNumToChooseFeedback]}`)

							msg.channel.send({ embeds: [feedbackNeg] });
						}
					}
				}

				if(msg.content.toLowerCase().includes(`${PREFIX}nasa`)){
					let command = msg.content.replace(`${PREFIX}nasa`, '');
					command = command.replaceAll(" ","")

					if (command === "mars"){

						msg.reply(fetch_placeholders.mars).then(message => {
							axios
								.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env['NASA_API_KEY']}`)
								.then((response) => {
									const randomNumberForMars = random(0, response.data.photos.length - 1) 

									const marsEmbed = new MessageEmbed()
										.setColor('#6bcc58')
										.setTitle(`Some mars pictures!`)
										.setDescription(`Here is a mars picture`)
										.addFields(
											{ name: 'Rover Name', value: `${response.data.photos[randomNumberForMars].rover.name}`, inline: true },
											{ name: 'Rover Status', value: `${response.data.photos[randomNumberForMars].rover.status}`, inline: true },
											{ name: 'Camera Name', value: `${response.data.photos[randomNumberForMars].camera.full_name}`, inline: true },
										)
										.setImage(`${response.data.photos[randomNumberForMars].img_src}`)

									message.edit({ embeds: [marsEmbed], content: "There you go, a mars picture!" });
								})
						})
					}


				}
		}
	}
})


keepServerAlive();
bot.login(process.env['TOKEN'])