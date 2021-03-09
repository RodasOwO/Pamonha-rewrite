const discord = require("discord.js")
const mongoose = require("mongoose")
const UserSchema = require("../schemas/user-schema")
exports.run = async (Pamonha, message, args) => {
  try {
    let rand = Math.random()
    const data = await UserSchema.findOne({
      _id: message.author.id,
    })
    if (!data) {
      message.reply(
        "Você não estava registrado na database , mas agora já esta :smile:, utilize o comando outra vez para farmar"
      )
      await UserSchema.create({
        _id: message.author.id,
        milho: 0,
      })
    } else {
      var endmilho = data.milho + rand
      let endmilhoround = Math.round(endmilho)
      await UserSchema.findOneAndUpdate(
        {
          _id: message.author.id,
        },
        {
          _id: message.author.id,
          milho: endmilhoround,
        },
        {
          upsert: false,
          new: true,
        }
      )
      const data2 = await UserSchema.findOne({
        _id: message.author.id,
      })
      message.reply("Você tem " + data2.milho + " agora")
    }
  } catch (err) {
    message.channel.send(
      "não consegui executar o comando devido ao erro```" + err + "```"
    )
  }
}
