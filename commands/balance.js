const discord = require("discord.js")
const mongoose = require("mongoose")
const UserSchema = require("../Schemas/user-schema")

exports.run = async (Pamonha, message, args) => {
  try {
    var data = await UserSchema.findOne({
      _id: message.author.id,
    })
    if (!data) {
      const m = await message.reply(
        "Você não está registrado na database\n Registrando..."
      )
      await UserSchema.create({
        _id: message.author.id,
        milho: 0,
      })
      m.edit(
        "Agora está :thumbsup:, utilize o comando outra vez para ver as suas moedas"
      )
    } else {
      let milhoredondo = Math.round(data.milho)
      message.reply("Você tem " + milhoredondo + " milhos")
    }
  } catch (err) {
    message.channel.send(
      "Este comando não pode ser executado devido ao erro " + err
    )
  }
}
