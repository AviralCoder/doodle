const express = require("express");

const server  = express();

server.all("/", (req, res) => {
	res.send(`
	<h1>Discord bot is running! Server is ready! All things OK.</h1>
	<h1>Status - OK</h1>
	<h1>Warnings - None.</h1>
	<h1>Current Discord Bot -  Doodle#2838</h1>`)
})

const keepServerAlive = () => {
	server.listen(4000, () => {
		console.log("Server is ready!")
	})
}

module.exports = { keepServerAlive }