const discord = require("discord.js")
const { prefix, mongoPath } = require("../config.json")
const GuildSchema = require("../schemas/guild-schema")
const connectToMongo = require("./DataBaseConnection")
function initialize(token) {
  const Pamonha = new discord.Client()
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

  Pamonha.on("message", async (message) => {
    const GuildData = await GuildSchema.findOne({
      _id: message.guild.id,
    })
    if (!GuildData) {
      await GuildSchema.create({
        _id: message.guild.id,
        prefix: prefix,
      })
    }
    const prefixo = GuildData.prefix

    if (message.author.bot) return
    if (message.channel.type == "dm") return
    if (
      message.content.startsWith(`<@${Pamonha.user.id}>`) ||
      message.content.startsWith(`<@!${Pamonha.user.id}>`)
    ) {
      return message.reply(
        `Olá , eu sou a Pamonha chan , o meu prefixo neste servidor é ${prefixo} para mais informação use ${prefixo}help`
      )
    }
    if (!message.content.toLowerCase().startsWith(prefixo.toLowerCase())) return
    const args = message.content.trim().slice(prefixo.length).split(/ +/g)
    const cmd = args.shift().toLowerCase()
    try {
      if (cmd) {
        const cmdfile = require(`../commands/${cmd}`)
        cmdfile.run(Pamonha, message, args)

        console.log(
          `${message.author.id}/${message.author.tag} usou o comando ${cmd} na guild ${Guild.id}`
        )
      } else return
    } catch (err) {
      return
    }
  })
  Pamonha.login(token)
  module.exports = Pamonha
}

module.exports = initialize
