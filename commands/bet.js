const discord = require("discord.js")
const mongoose = require("mongoose")
const UserSchema = require("../schemas/user-schema")
exports.run = (Pamonha, message, args) => {
  try {
      const user = message.mentions.users.first()
          const data1 = await UserSchema.findOne({
        _id: message.author.id,
      })
      const data2 = await UserSchema.findOne({
        _id: user,
      })
      let valor = args[1]
      if (!user) {
          return message.reply("Tens de mencionar alguem para apostar")
      }
      if (!data1) {
          await UserSchema.create({
              _id: message.author.id
          })
          return message.reply ("Você nao estava registrado na database , execute o comando outra vez")
      }
      if (!data2) {
        await UserSchema.create({
            _id: user
        })
        return message.reply (`O usuario ${user.tag} não estava registrado na database , execute o comando novamente`) 
      }
if (data1.milho < valor) {
    return message.reply("Você nao tem milhos suficientes para apostar")
}
if (data2.milho < valor) {
    return message.reply(`O usuario ${user.tag} não tem milhos suficientes para apostar`)
}
  } catch (err) {
    message.channel.send(
      "não consegui executar o comando devido ao erro```" + err + "```"
    )
  }
}
