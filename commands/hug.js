const discord = require("discord.js")
exports.run = (Pamonha,message,args) => {
    try {
        var list = [
            'https://media1.tenor.com/images/63f37cdce7bdc233c7186c2b91e9810c/tenor.gif?itemid=16038267',
            'https://i.pinimg.com/originals/cf/4e/d5/cf4ed5895ba0641ec009138003535b48.gif',
            'https://media1.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
            'https://thumbs.gfycat.com/AlienatedUnawareArcherfish-size_restricted.gif',
            'https://i.imgur.com/r9aU2xv.gif',
            'https://i.pinimg.com/originals/8d/ab/29/8dab296aed2cbe25af8ebb4703517356.gif'


        ]
        var rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || Pamonha.users.cache.get(args[0])
        if (!user) {

            return message.reply('Tens de mencionar alguém para abraçar')

        }
        let avatar = message.author.displayAvatarURL({dynamic: true, format: 'png'});
        const hug = new discord.MessageEmbed()
            .setTitle('Abraços uwu')
            .setColor('#DE2424')
            .setDescription(`${message.author} Abraçou ${user}`)
            .setImage(rand)
            .setTimestamp()
            .setThumbnail(avatar)
            .setAuthor(message.author.tag, avatar);
        message.channel.send(hug);
    }catch(err) {
        message.channel.send(`Não foi possivel executar este comando devido ao erro ${err} , desculpe pela inconveniencia`)
    }

    }
