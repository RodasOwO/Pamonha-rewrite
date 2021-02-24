const discord = require("discord.js")
const { OwnerId } = require("../config.json")
exports.run = (Pamonha, message, args) => {

if (message.author.id == OwnerId) {
    try {
        const evaluatedString = eval(args.join(" "))
        message.channel.send("```" + evaluatedString + "```")
    } catch (err) {
        message.channel.send("Oh no " + err);
    }
}else {
        message.channel.send("Este comando é reservado para os donos do bot")
    }


}