const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {

if (message.channel.type == "dm") return;
    let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
    let amount = 500
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Kamu sudah ambil credit harian, kamu bisa ambil lagi dalam **${time.hours}jam ${time.minutes}menit ${time.seconds}detik**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Credit harian`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Daily Reward**`)
    .addField(`Credit harian`, amount)

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())
        
    }

}
module.exports.help = {
  name: "daily",
  aliases: ["d", "daili"]
}