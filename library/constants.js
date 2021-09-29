var PREFIX = "$";
var BOT_URL = "https://discord.com/api/oauth2/authorize?client_id=892658773989142548&permissions=536280038518&scope=bot";
var GITHUB_REPO = "https://github.com/AviralCoder/doodle";
var COMMANDS = [
    {
        command: PREFIX + "help",
        description: "List of all commands!"
    },
    {
        command: PREFIX + "info",
        description: "Info about the bot!"
    },
    {
        command: PREFIX + "source",
        description: "Link to source code about the bot!"
    },
    {
        command: PREFIX + "meme",
        description: "Sends you a random meme!"
    },
    {
        command: PREFIX + "cat",
        description: "Sends you a random cat picture!"
    },
    {
        command: PREFIX + "dog",
        description: "Sends you a random dog picture!"
    },
    {
        command: PREFIX + "ship",
        description: "Ship yourself with someone else and see how much love (friendship) you have!"
    }
];
var BULLY_PHRASES = ["You suck!", "Why are you still in the server?", "Oh, hi cry baby!", "Your face makes onions cry", "Were you born on a highway? Because most accidents happen there only.", "Stop messaging, idiot."];
module.exports = { PREFIX: PREFIX, BOT_URL: BOT_URL, COMMANDS: COMMANDS, GITHUB_REPO: GITHUB_REPO, BULLY_PHRASES: BULLY_PHRASES };
