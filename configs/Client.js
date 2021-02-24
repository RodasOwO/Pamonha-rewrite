const discord = require("discord.js")
const {token, prefix} = require("../config.json")

function initialize() {
    const Pamonha = new discord.Client()
    const mongo = require("./mongo")
    Pamonha.on("message", (message) => {
        if (message.author.bot) return
        if (message.channel.type == "dm") return
        if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return
        const args = message.content.trim().slice(prefix.length).split(/ +/g)
        const command = args.shift().toLowerCase()
        try {
            const cmdfile = require(`../commands/${command}`)
            cmdfile.run(Pamonha, message, args)
        } catch (err) {
            return
        }
    })

    Pamonha.on("ready", () => {
        let activities = [`${prefix}help`],
            i = 0
        setInterval(
            () =>
                Pamonha.user.setActivity(`${activities[i++ % activities.length]}`, {
                    type: "PLAYING",
                }),
            5000
        )
        Pamonha.user.setStatus("online").catch(console.error)
        console.log("estou online yay")
    })
    Pamonha.login(token)

    module.exports = Pamonha
}

module.exports = initialize
