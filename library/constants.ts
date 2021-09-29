

const PREFIX:string = "$";
const BOT_URL:string = "https://discord.com/api/oauth2/authorize?client_id=892658773989142548&permissions=536280038518&scope=bot";
const GITHUB_REPO:string = "https://github.com/AviralCoder/doodle"

const COMMANDS: any[] = [
	{
		command: `${PREFIX}help`,
		description: "List of all commands!"
	},
	{
		command: `${PREFIX}info`,
		description: "Info about the bot!"
	},
	{
		command: `${PREFIX}source`,
		description: "Link to source code about the bot!"
	}
];


module.exports = { PREFIX, BOT_URL, COMMANDS, GITHUB_REPO }

