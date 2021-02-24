const discord = require("discord.js")
exports.run = (Pamonha, message, args) => {
    try {
        const Pergunta = args.join(" ")
        var list = [
            "Sim",
            "Não",
            "Talvez",
            "Claro!",
            "Boiola!",
            "xD",
            "",
            "OwO what's this?",
            "para estás me a assustar",
            " 😳👉👈 ",
            "||bora namorar||",
        ]
        var rand = list[Math.floor(Math.random() * list.length)]

        const wut = new discord.MessageEmbed()
            .setTitle("A sábia Pamonha respondeu")
            .setDescription("Pergunta: " + Pergunta + "\nResposta: " + rand)
            .setColor("#088A68")

        message.channel.send(wut)
    } catch (err) {
        message.channel.send(
            "Este comando nao pode ser executado devido ao erro" + err
        )
    }
}
