const db = require("quick.db") 
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
 const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
 let user = message.author;
 let author = await db.fetch(`fish_${user.id}`)

 let timeout = 600000;
    
 if (author !== null && timeout - (Date.now() - author) > 9000) {
      let time = (timeout - (Date.now() - author));
    
        message.channel.send(`**${member.user.tag}**, Kamu sudah memancing baru baru ini, Cobalagi dalam\`${time.minutes} menit, ${time.seconds} Detik\`.`)
      } else {

    let fish = [
    "**🐠 `(Tropical Fish)`",
    "**🐟 `(Fish)`",
    "**🐡 `(Blow Fish)`",
    "**🐬 `(Dolphin)`",
    "**🦐 `(Shrimp)`",
    "**🦈 `(Shark)`",
    "**🔋 `(Battery)`",
    "**🦂 `(Scorpion)`",
    "**⛸ `(Ice Skate)`",
    "**👕 `(Shirt)`",
    "**📦 `(Package)`",
    "**🏓 `(Ping Pong)`",
    "**🦑 `(Squid)`",
    "**⚽ `(Soccer)`"

    ]
    let fishresult = Math.floor((Math.random() * fish.length));
    let amount = Math.floor(Math.random() * 1000) + 1;
        if (!args[0]) {
        message.channel.send(`**FISH MINIGAME:** - 🎣\n**${member.user.tag}** fished a ${fish[fishresult]} and earned \`${amount}\` credits.`)
    db.add(`money_${user.id}`, amount)
    db.set(`fish_${user.id}`, Date.now())
    }
   }
}
module.exports.help = {
    name:"fish",
    aliases: []
}