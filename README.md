# Doodle - The Discord Bot
Doodle is a discord bot made just for entertainment of users in the server.

## Use this bot
To integrate the bot into your own server [click me](https://discord.com/api/oauth2/authorize?client_id=892658773989142548&permissions=536280038518&scope=bot).

Not all permissions mentioned have been used. For proof, please check the source code (`index.js`)

## Tools

- Node.js 
- Express.js 
- Discord.js 
- JavaScript
- Repl.it
- Axios.js
- Git
- Github
- Repl.it Environment Variables


## Features

- Error checking to prevent breaking of bot when an error occurs.
- Fetch placeholders are provided in bot messages while data is being fetched from sources.
- Deployed on Repl.it. The deployed app is kept alive using Express.js and Uptime Robot. Uptime Robot pings the server every 5 mins to keep it alive and notifies me when the server is down.
- Bot always online.


## Commands

**Note: The current prefix is $ (dollar) symbol.**

- `<PREFX>inspire` - Gives a random quote _fetched using the quotable API_
- `<PREFIX>meme` - Gives a random meme fetched from another _API_.
- `<PREFIX>info` - Gives a very small info about the bot.
- `<PREFIX>source` - Gives the GitHub source code link.
- `<PREFIX>suicide`- Sends a message in which the user has killed himself.
- `<PREFIX>cat` - Sends a random picture of a cute cat.
- `<PREFIX>dog` - Sends a random picture of a cute dog.
- `<PREFIX>deleteserver` - Sends a troll message saying that the server will be deleted (Doesn't actually delete the server)
- `<PREFIX>bored` - Sends a random fun activity 
- `<PREFIX>deathday` - Gives a random deathday every time the user sends a message in the form of an embed.
- `<PREFIX>colour` -  Gives a random lucky colour for the user in the form of an embed.
- `<PREFIX>number` - Gives a random lucky number for the user in the form of an embed.
- `<PREFIX>kill` - This command has one _parameter_ which is the user to kill. This then sends a message in which the sender kills the person in the parameter. 
- `<PREFIX>ship` - This command has two _parameters_ which is the users to ship. It gets a random love percentage and sends it. However, one parameter is also acceptable if a user wants to ship a person with that person. 
- `<PREFIX>troll` - This command can be run only by people who have the role named - "TROLLER" (caps compulsory). If the user doesn't have the role, it sends a message saying that the user cannot troll anybody. This command has one parameter, which is the person to troll. When this command is run, then whenever the person messages anything in every common server, the bot will bully the user in the replied.
- `<PREFIX>bullystop` - Stops bullying people (refer to the above command)
- `<PREFIX>feedback` - This command takes on parmater which is the user about whome feedback is to be given. The feedback of the user mentioned in the parameter can either be negative or positive. 
- `<PREFIX>nasa mars` - I used the NASA Rest API to get Mars images by rovers and reply to the user in the form of embeds.
- `<PREFIX>help` - Currently in development.

## Contributing
You are most welcome to submit a PR or an issue :)


## License
MIT License (check LICENSE file for more information).
