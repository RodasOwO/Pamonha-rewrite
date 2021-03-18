const discord = require("discord.js")
const mongoose = require("mongoose")
exports.run = (Pamonha, message, args) => {
  try {
  } catch (err) {
    message.channel.send(
      "não consegui executar o comando devido ao erro```" + err + "```"
    )
  }
}
