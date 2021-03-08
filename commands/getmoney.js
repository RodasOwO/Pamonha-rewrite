const discord = require("discord.js")
const mongoose = require("mongoose")
const UserSchema = require("../Schemas/user-schema")

exports.run = async (Pamonha, message, args) => {
  try {
    var rand = Math.random()
    UserSchema.findOneAndUpdate(
      {
        _id: message.author.id,
      },
      {
        _id: message.author.id,
        coins: rand,
      },
      {
        upsert: true,
        new: true,
      }
    )
  } catch (err) {
    message.channel.send(
      "Este comando não pode ser executado devido ao erro " + err
    )
  }
}
