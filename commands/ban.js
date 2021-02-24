const discord = require("discord.js")
exports.run = (Pamonha, message, args) => {
    try {
        const banido =
            message.mentions.users.first() || Pamonha.users.cache.get(args[0])
        const member = message.guild.member(banido)
        const banReason = args.slice(1).join(" ")
        if (!banido) {
            message.channel.send("Tens de me dizer alguem para eu banir!!!")
        } else if (
            message.guild.me.hasPermission("BAN_MEMBERS") &&
            message.member.hasPermission("BAN_MEMBERS")
        ) {
            member.ban({
                reason: `Banido por ${message.author.id} / ${message.author.tag} pelo motivo : ${banReason}`,
            })
        } else if (!message.member.hasPermission("BAN_MEMBERS")) {
            message.channel.send("Nao tens permissão para banir membros")
        }
    } catch (err) {
        message.channel.send(
            `Este comando nao pode ser executado devido ao erro : ${err}`
        )
    }
}

