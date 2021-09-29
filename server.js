const express = require("express");

const server  = express();

server.all("/", (req, res) => {
	res.send("Discord bot is running!")
})

const keepServerAlive = () => {
	server.listen(4000, () => {
		console.log("Server is ready!")
	})
}

module.exports = { keepServerAlive }