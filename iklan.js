const Discord = require("discord.js")
const client = new Discord.Client()
const channel = "843444578803384363";
const token = require("./config.json")

const iklan = require("./iklan.json")
      setInterval (() => {
  const item = iklan [Math.floor(Math.random() * iklan.length)];
  

const embed = new Discord.RichEmbed()
         .setTitle('```IKLAN```')
         .setColor('RED')
         .setImage(''+`${item.banner}`+'')
         .addField(''+`${item.desc}`+' : Butuh Reff TiktoD Rate 10K DM @Ansel')
         .setDescription('**Penerbit: **'+`${item.penerbit}`+'')
         .setTimestamp()
         .setFooter('IKLAN LAYANAN MASYARAKAT')
        client.channels.get(channel).send(embed).then(m => m.delete (30000))



}, 60000);
console.log('iklan siap');

client.login(token);
