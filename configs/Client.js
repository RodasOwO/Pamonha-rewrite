const discord = require("discord.js")
const { prefix } = require("../config.json")
const UserSchema = require("../schemas/user-schema")
function initialize(token) {
  const Pamonha = new discord.Client()
  const mongo = require("./mongo")
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
  const connectToMongoDB = async () => {
    await mongo().then((mongoose) => {
      try {
        console.log("Conectada á database")
      } finally {
        mongoose.connection.close
      }
    })
  }

  connectToMongoDB()
  Pamonha.login(token)

  module.exports = Pamonha
}

module.exports = initialize
