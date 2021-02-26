const api = require("imageapi.js");
const discord = require("discord.js");
exports.run = async (Pamonha, message ,args)
{
    try {
        let subreddits = [
            'meme',
            'memes'
        ]
        let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)]
        let img = await api(subreddit)

        let Membed = new discord.MessageEmbed()
            .setTitle(`Um meme do r/${subreddit}`)
            .setImage(img)
            .setFooter(`r/${subreddit}`);
        message.channel.send("Este comando está desativado pois nao est")
    } catch(err){
        message.channel.send(`Este comando não pode ser executado devido ao erro ${err}`)
    }

}
