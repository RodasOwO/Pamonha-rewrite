const discord = require("discord.js")
exports.run = (Pamonha, message ,args) => {
    try {
        let user = message.mentions.users.first() ||Pamonha.users.cache.get(args[0]);
        if (!user) {
            return message.reply('Tens de mencionar com quem te queres **shipar**');
        }


        var ship = Math.floor(Math.random() * 100)
        const ShipEmbed = new discord.MessageEmbed()
            .setTitle("ship")
            .setDescription("**" + ship + "%**" + `\n  ${message.author.username}\n  ${user.username}! :heart:`)
            .setImage("https://media.discordapp.net/attachments/760959939899293736/773216940625494056/Heart.png")
        console.log(`${message.author} usou o comando ship`)
        message.channel.send(ShipEmbed);

}catch(err){
        message.channel.send(`Não consegui executar este comando devido ao erro ${err} desculpe pela inconveniencia :cry:`)
    }

}