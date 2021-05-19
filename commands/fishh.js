const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
  let user = message.author;
  
  let bal = db.fetch(`money_${user.id}`);
  
  let fish = await db.fetch(`fish_${user.id}`);
  
  
  
  
  
}