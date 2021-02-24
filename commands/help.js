const discord = require("discord.js")
const paginationEmbed = require("@xoalone/discordjs-pagination")
exports.run = (Pamonha, message, args) => {
  try {
    const ModEmbed = new discord.MessageEmbed()
      .setAuthor("Comandos de moderação")
      .setColor("RANDOM")
      .setTitle("Os meus comandos de moderação são os seguintes")
      .addFields(
        { name: "ban", value: "bane um usuário do servidor", inline: true },
        {
          name: "Clear",
          value: "Apaga um certo numero de mensagens do chat",
          inline: true,
        },
        {
          name: "Kick",
          value: "Expulsa um usuario do servidor",
          inline: true,
        },
        { name: "say", value: "Faz eu dizer alguma coisa", inline: false }
      )

    const interembed = new discord.MessageEmbed()
      .setAuthor("Comandos de interação")
      .setColor("RANDOM")
      .setTitle("Os meus comandos de interação são os seguintes :")
      .addFields(
        {
          name: "Abraçar",
          value: "Para abraçar aquele amigo que merece",
          inline: true,
        },
        {
          name: "beijar",
          value: "Para beijar uma pessoa :flushed:",
          inline: true,
        }
      )
    /* const helpembed = new discord.MessageEmbed()
      .setAuthor("Ajuda")
      .setColor("RANDOM")
      .setDescription("Estes são todos os meus comandos!")
      .addFields(
        { name: "Moderação", value: "Ban , Clear ,Kick , say", inline: true },
        {
          name: "Interação",
          value: "Abraçar , beijar , bochecha , lamber , morder , slap",
        },
        {
          name: "Extra",
          value:
            "Adicionar , cat ,help , owowhatsthis , ping ,\n randomnumber ,shrug , stats , sugerir , suporte  , upvote , userinfo, avatar",
        },
        { name: "Economia", value: "||Em Breve||" }
      )

    message.channel.send(helpembed)*/
  } catch (err) {
    message.channel.send(
      `Este comando nao pode ser executado devido ao erro : ${err}`
    )
  }
}
