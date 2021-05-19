const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Maaf Kamu tidak ada izin!");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Menghapus  ${args[0]} Pesan Silahkan Tunggu`).then(msg => msg.delete(6000));
});

}


module.exports.help = {
  name: "hapus"
}