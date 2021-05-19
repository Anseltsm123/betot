exports.run = (client, message, args) => {
 let joinRole = message.guild.roles.find("name", "Cowok")
 message.member.addRole(joinRole);
 message.reply(`Kamu sudah didaftarkan sebagai \`${joinRole.name}\` `)
}