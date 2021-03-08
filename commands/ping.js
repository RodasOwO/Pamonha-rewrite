const discord = require("discord.js")
exports.run = async (Pamonha, message, args) => {
  try {
    await message.reply(
      `Pong!\n🏓A minha latencia é ${
        Date.now() - message.createdTimestamp
      }ms\n🏓A Latencia do API é ${Math.round(Pamonha.ws.ping)}ms`
    )
  } catch (err) {
    message.channel.send(
      "não consegui executar o comando devido ao erro```" + err + "```"
    )
  }
}
