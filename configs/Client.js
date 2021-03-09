const discord = require("discord.js")
const { prefix, mongoPath } = require("../config.json")

const connectToMongo = require("./DataBaseConnection")
function initialize(token) {
  const Pamonha = new discord.Client()

  Pamonha.on("message", (message) => {
    if (message.author.bot) return
    if (message.channel.type == "dm") return
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return
    const args = message.content.trim().slice(prefix.length).split(/ +/g)
    const cmd = args.shift().toLowerCase()
    try {
      if (cmd) {
        const cmdfile = require(`../commands/${cmd}`)
        cmdfile.run(Pamonha, message, args)
        console.log(
          `${message.author.id}/${message.author.tag} usou o comando ${cmd}`
        )
      } else return
    } catch (err) {
      return
    }
  })

  Pamonha.on("ready", () => {
    connectToMongo(mongoPath)
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
