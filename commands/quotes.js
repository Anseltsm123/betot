module.exports.run = (client, message, args) => {

  var quotes = [
    "```Jika Kamu bosan Hidup Mati aja XD```",
    "***Sabar Om quotes Belum Siap***",
    "Sabar Quotes Segera!!"
  ];
  
  var tex = quotes[Math.floor(Math.random() * quotes.length)]
  message.channel.send(tex)
}