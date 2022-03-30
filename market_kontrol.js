const { MessageEmbed } = require("discord.js") 
const db = require("wio.db")

module.exports = {
    name: "kontrol-üye",
    aliases: ["kontol-üye"],
    description: "",
    usage: "kontrol-üye",
    ownerOnly: false,
    
    run: async (message,args,client) => {

            let açıkmı = await db.fetch(`bronz_${message.author.id}`)
            let açıkmı1 = await db.fetch(`gümüş_${message.author.id}`)
            let açıkmı2 = await db.fetch(`altın_${message.author.id}`)
            const mesaj1 = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('-------------- ÜYELİK KONTROL MENÜSÜ --------------')
            .setThumbnail(client.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
            .setTimestamp()
            .setFooter("Boiz Bot | ©BoizGrubu", client.user.avatarURL())
            .addField('BRONZ ÜYELİK : ' , `${açıkmı ? 'AKTİF' : 'AKTİF DEĞİL'}!` , true)
            .addField('GÜMÜŞ ÜYELİK : ' , `${açıkmı1 ? 'AKTİF' : 'AKTİF DEĞİL'}!` , true)        
            .addField('ALTIN ÜYELİK : ' , `${açıkmı2 ? 'AKTİF' : 'AKTİF DEĞİL'}!` , true)
            message.channel.send(mesaj1)
    }
}
