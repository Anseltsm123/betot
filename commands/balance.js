const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    //let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    //if (bal === null) bal = 0;
  let user = message.mentions.members.first() || message.author
let bal = await db.fetch(`money_${user.id}`)

    message.channel.send('Kamu mempunyai `' + bal + '`')


}