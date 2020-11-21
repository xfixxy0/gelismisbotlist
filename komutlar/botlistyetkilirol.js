const discord = require('discord.js')
const db = require('wio.db')

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`<a:by:748515598765391933> Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`);

if (args[0] === 'sıfırla') {
let rol = db.fetch(`botlistyetkilirol_${message.guild.id}`)  
  if (!rol) return message.channel.send(`<a:by:748515598765391933> Botlist Yetkili Rolü Aayrlanmamış!`)
  message.channel.send(`<a:hg:748304066794356767> Botlist Yetkili Rolü Sıfırlandı!`)
db.delete(`botlistyetkilirol_${message.guild.id}`)
  return;
}

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(`<a:by:748515598765391933> Ayarlayacağınız Botlist Yetkili Rolü Belirtiniz!`)

db.set(`botlistyetkilirol_${message.guild.id}`, rol.id)

message.channel.send(`<a:hg:748304066794356767> Botlist Yetkili Rolü ${rol} Olarak Ayarlandı!`)
  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'botlist-yetkili-rol'
}