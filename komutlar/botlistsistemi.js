const discord = require("discord.js");
const { prefix } = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {
  let embed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(bot.user.avatarURL)
    .setTitle(`${bot.user.username} BotList Menüsü`)
    .addField(`${prefix}onayla <sahipid> <botid>`, "Botu Kabul Eder")
    .addField(`${prefix}reddet <botsahip id> <nedeni>`, "Üyenin Botunu Reddedir")
    .addField(
      `${prefix}botekle-log-kanal #kanal`,
      "Hangi Kanalda Üyenin Botu ekleyebilceni ayarlar)"
    )
    .addField(`${prefix}botekle-log-kanal kapat`, "Üyenin Hangi kanalda botu ekleyeni kapatır!")
    .addField(`${prefix}log-kanal #kanal`, "Botun reddedilip onaylanan bekliyenleri gözüken logu ayarlar!")
    .addField(`${prefix}log-kanal sıfırla`, "Botun reddedilip onaylanan bekliyenleri gözüken logu sıfırlar!")
    .addField(`${prefix}botlist-yetkili-rol`, "Botlistte botu onaylıcak reddedicek rolü ayarlar!")
    .addField(`${prefix}botlist-yetkili-rol sıfırla`, "Botları onaylıcak reddedicek rolü sıfırlar")
    .addField(`${prefix}yetkili-log #kanal`, "Botlist yetkili log kanal ayarlar")
	.addField(`${prefix}yetkili-log sıfırla`, "Botlist Yetkili Log kanalı sıfırlar")
	.addField(`${prefix}botlist-kapat`, "Botlist sistemini sıfırlar")
	.addField(`${prefix}botekle <id> <prefix>`, "Üye botunu ekliyebilir")

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["botlistsistem","botlist-sistem","botlist-sistemi"],
  PermLevel: 0
};

exports.help = {
  name: "botlist",
  description: "Bot ekleme başvurusu",
  usage: "bot"
};
