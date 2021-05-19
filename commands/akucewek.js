exports.run = (client, message, args) => {
 let joinRole = message.guild.roles.find("name", "Cewek")
 message.member.addRole(joinRole);
 message.reply(`Kamu sudah didaftarkan sebagai \`${joinRole.name}\` `)
}