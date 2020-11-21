const Discord = require("discord.js");
const db = require("wio.db");
exports.run = async (client, message, args) => {
  let yetkilii  = db.fetch(`botlistyetkilirol_${message.guild.id}`)

  if(!message.member.roles.has(yetkilii)) return message.channel.send(`<a:by:748515598765391933> Bu Komudu Kullanabilmen İçin <@&${yetkilii}> Rolüne Sahip Olmalısın! Degilsen v!botlist-yetkili-rol @rol`)
  message.delete(5000);
  const sahip = args[0];
  if (!sahip)
    return message
      .reply(`Bir kullanıcı id girmelisin.`)
      .then(msg => msg.delete(5000));
  const botid = args[1];
  if (!botid)
    return message
      .reply(`Hani bot id neyi onaylicam?`)
  .then(msg => msg.delete(5000));
  let kanal = await db.fetch(`hgK9_${message.guild.id}`); 
  if (!kanal) return;
  const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(`<@${botid}> isimli bot başarıyla onaylandı!`);
  message.channel.send(embed).then(msg => msg.delete(5000));
  const embed2 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setDescription(
    `:green_circle:| ${message.author} adlı yetkili tarafından <@${sahip}> adlı kullanıcının <@${botid}> adlı botu onaylandı!`);
  client.channels.get(kanal).send(embed2); // Kanal ID
  let yetkilikanal = await db.fetch(`hgK2_${message.guild.id}`); 
  if (!yetkilikanal) return;
  const yetkili = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("Onaylandı")
  .setDescription(`**Yetkili**:\n${message.author}\n**Bot Sahibi**:\n<@${sahip}>\n**Davet Linkleri**:\n[Perm 0](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0) | [Perm 8](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)`)
  client.channels.get(yetkilikanal).send(yetkili);
};

 //youtube.com/xfixxyyy
//teşekkürler xFixxy

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["onayla","onay"],
  PermLevel: 0
};

exports.help = {
  name: "kabul",
  description: "Bot ekleme başvurusu",
  usage: "bot"
};
