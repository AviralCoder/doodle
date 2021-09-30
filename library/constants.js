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
var BULLY_PHRASES = ["You suck!", "Why are you still in the server?", "Oh, hi cry baby!", "Your face makes onions cry", "Were you born on a highway? Because most accidents happen there only.", "Stop messaging, idiot.", "You're as useless as the 'ueue' in 'queue'", "If laughter is the best medicine, your face must be curing the world!", "Some day, you will go far, and I hope you will stay there.", "Do your romance in personal, dumbo", "I’m not insulting you; I’m describing you.", "OH MY GOD, YOU CAN SPEAK!", "I was today years old when I realized I didn’t like you.", "You have an entire life to be an idiot. Why not take today off?", "Are you almost done with all of this drama? Because I need an intermission.", "Life is full of disappointments, and I just added you to the list.", "You’re cute. Like my dog. He also always chases his tail for entertainment.", "You have miles to go before you reach mediocre.", "You just might be why the middle finger was invented in the first place.", "Is your ass jealous of the amount of shit that comes out of your mouth?", "You bring everyone so much joy when you leave the room.", "Feed your own ego. I’m busy.", "I thought of you today. It reminded me to take out the trash.", "Jesus might love you, but everyone else definitely thinks you’re an idiot.", "You’re not stupid! You just have bad luck when you’re thinking."];
//if any feedback added to good, make sure to add one to the bad as well
var feedbackGood = [
    "They are very cool and they always make me happy! :)",
    "Their determination is even better than of Elon Musk!",
    "Oh! Their heart is very very pure and they veryyy kind!",
    "That man/woman right there doesn't easily give up!",
    "I just love that person!!",
    "They are someone's reason to smile <3",
    "That person right there lights up the whole room in seconds!",
    "They deserve a hug for what they do!",
    "They are more helpful than they realize.",
    "They are a gift to those around them.",
    "They are just wondeful!",
    "Cannot be described in words!"
];
//if any feedback added to bad, make sure to add it to the good one as well
var feedbackBad = [
    "They are as useful as the wings on a motorcycle, i.e. they are useless",
    "They are the hecking reasonw why our lovely Jeff Bezoz went to space.",
    "Stop bullying them, she/he isn't as cringe as tiktok, he is WORSE.",
    "I just found their nose in my business, may god help them",
    "This person doesn't need feedback, everyone including God knows that he is an idiot",
    "Their messages are like zomato, useless.",
    "Their messages are injurious to health just like alcohol",
    "They are a cloud, when they disappear, the day is beautiful!",
    "Nah, no feedbacks to small children! ;)",
    "Thinking is the ultimate solution to them when they are in a problem, but it fails cz when they try to think, even their brain dies because of their thoughts",
    "I deafen myself when they unmute themself to prevent getting dirty as shit comes out from their mouth."
];
var colors = [
    {
        hex: "#000000",
        commonName: "Black"
    },
    {
        hex: "#ffffff",
        commonName: "White"
    },
    {
        hex: "#FF0000",
        commonName: "Red"
    },
    {
        hex: "#00FF00",
        commonName: "Green"
    },
    {
        hex: "#0000FF",
        commonName: "Blue"
    },
    {
        hex: "#FFC0CB",
        commonName: "Pink"
    },
    {
        hex: "#FFFF00",
        commonName: "Yellow"
    },
    {
        hex: "#FFA500",
        commonName: "Orange"
    },
    {
        hex: "#8F00FF",
        commonName: "Violet"
    }
];
module.exports = { PREFIX: PREFIX, BOT_URL: BOT_URL, COMMANDS: COMMANDS, GITHUB_REPO: GITHUB_REPO, BULLY_PHRASES: BULLY_PHRASES, feedbackBad: feedbackBad, feedbackGood: feedbackGood, colors: colors };
