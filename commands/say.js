const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send(args[0])
}

module.exports.help = {
	command:"say"
}