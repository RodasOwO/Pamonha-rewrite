const discord = require("discord.js")
exports.run = (Pamonha, message, args) => {
  try {
    const invite = new Discord.MessageEmbed()

      .setTitle("O meu invite")
      .setColor("#DE2424")
      .setDescription(
        `[Invite](https://discord.com/oauth2/authorize?client_id=758749882122633236&scope=bot&permissions=8)`
      )
      .setTimestamp()
  } catch (err) {
    message.channel.send(
      "não consegui executar o comando devido ao erro```" + err + "```"
    )
  }
}
