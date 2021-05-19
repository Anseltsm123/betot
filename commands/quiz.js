const quiz = require('../quiz.json');
const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async(client, message, args) => {
  if (message.channel.type == "dm") return;
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Maaf kamu tidak ada izin!')
 const channel = message.mentions.channels.first() ? message.mentions.channels.first().id : true;
 if(!channel) {
   return message.channel.send('silahkan mention channel!')
 }
message.channel.send(`quiz di set ke \`${channel}\``)
 // var qz = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '15', '20'];
  let duit = 10
  setInterval (() => {
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  const filter = response => {
    return item.answer.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    
  };
  const embed = new Discord.RichEmbed()
  .setDescription('Pertanyaan:   ' +`${item.question}`+ '')
  .setAuthor('Tebak-Tebakan\nTersedia Untuk Android')
  .setColor('RED')
  .setTimestamp()
  .setFooter('jawaban dalam 15 detik!')
  client.channels.get(channel).send(embed).then(m => m.delete(6000)).then(() => {

	message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000,  } )
		.then(collected => {
			client.channels.get(channel).send(`${collected.first().author} ***Benar! ${item.answer}*** Kamu mendapat 10 Credit! `).then(m => m.delete(8000));
    db.add(`money_${message.author.id}`, duit)
		})
		.catch(collected => { 
    const aembed = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor('⏱️ Waktu Telah Habis')
    .setTimestamp()
    .setDescription(' jawabannya adalah: ` ' +`${item.answer}`+ '`   🤣')
			client.channels.get(channel).send(aembed).then(m => m.delete(5000));
		})
  })
  }, 50000)

}