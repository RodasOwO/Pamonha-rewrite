const discord = require("discord.js")
const mongoose = require("mongoose")
const UserSchema = require("../Schemas/user-schema")
exports.run = async (Pamonha, message, args) => {
  const result = await UserSchema.findOne({
    _id: message.author.id,
  })
  if (!result) {
    message.channel.send("Você não esta registrado na database")
  } else {
    message.channel.send(result)
  }
}
