const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json")


bot.on("ready", () =>{
    console.log(`Connecté sur ${bot.user.tag}.`);
    bot.user.setActivity("Hello World" , {type: "STREAMING" , url:"https://twitch.tv/monstercat"});
 });


bot.on("message",async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(bot, message, args);
    } catch (err) {
        console.error(err);
    }
});


bot.login(config.token)