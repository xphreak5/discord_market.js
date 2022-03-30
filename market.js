const db = require("wio.db")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "market",
    aliases: ["market"],
    description: "",
    usage: "market",
    ownerOnly: false,
    
    run: async (message,args,client) => {

        const market = new MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Boiz Bot | ©BoizGrubu", client.user.avatarURL())
        .setThumbnail(client.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
        .setTitle('----------------------- BOİZ MARKET -----------------------')
        .addField('BRONZ ÜYELİK : 4.000 **** Parası' , 'Botumuzun bronz üyelere özel olan komutlarını kullanmanızı sağlar' , true)
        .addField('GÜMÜŞ ÜYELİK : 8.000 **** Parası' , 'Botumuzun gümüş üyelere özel olan komutlarını kullanmanızı sağlar' , true)
        .addField('ALTIN ÜYELİK : 12.000 **** Parası' , 'Botumuzun altın üyelere özel olan komutlarını kullanmanızı sağlar' , true)
        .addField('SATIN ALMA İŞLEMLERİ' , '?satın-al [bronz/gümüş/altın] yazdıktan sonra bankanızda yeteri kadar para varsa üyeliğiniz kısa bir süre sonra aktif hale gelecektir.')
        message.channel.send(market)
    }
}
