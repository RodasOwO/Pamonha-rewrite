const discord = require("discord.js")
const mongoose = require("mongoose")
const GuildSchema = require("../schemas/guild-schema")
exports.run = async (Pamonha, message, args) => {
  try {
    let prefixo = args[0]
    if (prefixo.length > 4) {
      return message.reply("O prefixo pode ter no maximo 4 caracteres")
    }
    if (!prefixo) {
      return message.channel.send(
        "É necessário introduzir um prefixo para mudar :smile:"
      )
    }
    await GuildSchema.findOneAndUpdate(
      {
        _id: message.guild.id,
      },
      {
        _id: message.guild.id,
        prefix: prefixo,
      },
      {
        upsert: false,
        new: true,
      }
    )
    await message.reply("Agora o prefixo neste servidor é " + prefixo)
  } catch (err) {
    message.channel.send(
      "não consegui executar o comando devido ao erro```" + err + "```"
    )
  }
}
