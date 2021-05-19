const Discord = require('discord.js')
const db = require('quick.db')
const Canvas = require('canvas');
const snekfetch = require('node-superfetch');

exports.run = async (client, message, args) => {
  
  let user = message.mentions.members.first() || message.author;
  let money = db.fetch(`money_${user.id}`)
  const canvas = Canvas.createCanvas(250, 250);
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = "rgb(22, 229, 91)";
  ctx.fillRect(0, 0, 250, 250);
  
  const { body : a } = await snekfetch.get(user.avatarURL)
  const avatar = await Canvas.loadImage(a)
  ctx.drawImage(avatar, 0, 0, 80, 80)
  
  ctx.fillStyle = "rgb(238, 12, 57)";
  ctx.fillRect(0, 81, 80, 180)
  //username
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.font = "20px Bold";
  ctx.fillText(`${user.username}`, 0, 97)
  //balance
  ctx.fillStyle = "rgb(17, 59, 230)";
  ctx.fillRect(0, 100, 80, 5)
  
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.font = "20px Arial";
  ctx.fillText(money, 0, 110)
  //watermark
  ctx.font = "10px Arial";
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillText("TSM", 210, 240)
  const ath = new Discord.Attachment(canvas.toBuffer(), 'canvas.png');
  message.channel.send(ath)
}