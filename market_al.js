const { MessageEmbed } = require("discord.js")
const db = require("wio.db")

console.log("31")


module.exports = {
    name: "satın-al",
    aliases: ["satın-al"],
    description: "",
    usage: "satın-al",
    ownerOnly: false,
    
    run: async (message,args,client) => {

        const bankadaki = await db.fetch(`para_${message.author.id}`)

        if(!args[0]) return message.channel.send(
            new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('-------------- ÜYELİK SATIN ALMA MENÜSÜ --------------')
            .setThumbnail(client.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
            .setTimestamp()
            .setFooter("Boiz Bot | ©BoizGrubu", client.user.avatarURL())
            .addField('ÜYELİK SATIN ALMAK İÇİN :' , '?satın-al [bronz/gümüş/altın] yazarak bütçenize uygun olan üyeliği aktif edebilirsiniz.' , true)
            .addField('AYRICALIKLAR' , 'Üyelik seviyenize göre kullanabildiğiniz komut sayısı artar. **?kontrol-üye** yazarak üyelik seviyenize bakabilirsiniz.' , true)
            .addField('ÖNEMLİ BİLGİLENDİRME' , 'Satın al komutu kullanıldıktan sonra eğer bankanızda almak istediğiniz üyelik için yeterli para varsa üyelik anında hesabınıza tanımlanır.')
        )
        if(args[0] === 'bronz') {
            let açıkmı = await db.fetch(`bronz_${message.author.id}`)
            if(açıkmı) return message.channel.send(`**${message.author.username}** kullanıcısı için zaten **BRONZ** üyelik aktif durumda`)
            if (4000 > db.fetch(`para_${message.author.id}`)) return message.channel.send(
            new MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter("Boiz Bot | ©BoizGrubu", client.user.avatarURL())
            .setTitle('YETERSİZ BAKİYE')
            .addField('Gereken miktar : 4000' , '--------')
            .addField(`Bankanızdaki para : ${bankadaki}` , '--------')
            )
            db.set(`bronz_${message.author.id}` , 'aktif')
            db.add(`para_${message.author.id}` , -4000)
            const bronzpaketalındı = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Bronz üyelik başarıyla aktif edildi')
            .setTimestamp()
            .setFooter("Boiz Bot | ©BoizGrubu", client.user.avatarURL())
            message.reply(bronzpaketalındı);    
        }
        if(args[0] === 'gümüş') {
            let açıkmı1 = await db.fetch(`gümüş_${message.author.id}`)
            if(açıkmı1) return message.channel.send(`**${message.author.username}** kullanıcısı için zaten **GÜMÜŞ** üyelik aktif durumda`)
            if (8000 > db.fetch(`para_${message.author.id}`)) return message.channel.send(
            new MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter("Boiz Bot | ©BoizGrubu", client.user.avatarURL())
            .setTitle('YETERSİZ BAKİYE')
            .addField('Gereken miktar : 8000' , '--------')
            .addField(`Bankanızdaki para : ${bankadaki}` , '--------')
            )
            db.set(`gümüş_${message.author.id}` , 'aktif')
            db.add(`para_${message.author.id}` , -8000)
            const gümüşpaketalındı = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Gümüş üyelik başarıyla aktif edildi')
            .setTimestamp()
            .setFooter("Boiz Bot | ©BoizGrubu", client.user.avatarURL())
            message.reply(gümüşpaketalındı); 
        }
        if(args[0] === 'altın') {
            let açıkmı2 = await db.fetch(`altın_${message.author.id}`)
            if(açıkmı2) return message.channel.send(`**${message.author.username}** kullanıcısı için zaten **ALTIN** üyelik aktif durumda`)
            if (8000 > db.fetch(`para_${message.author.id}`)) return message.channel.send(
            new MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter("Boiz Bot | ©BoizGrubu", client.user.avatarURL())
            .setTitle('YETERSİZ BAKİYE')
            .addField('Gereken miktar : 12000' , '--------')
            .addField(`Bankanızdaki para : ${bankadaki}` , '--------')
            )
            db.set(`altın_${message.author.id}` , 'aktif')
            db.add(`para_${message.author.id}` , -12000)
            const altınpaketalındı = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription('Altın üyelik başarıyla aktif edildi')
            .setTimestamp()
            .setFooter("Boiz Bot | ©BoizGrubu", client.user.avatarURL())
            message.reply(altınpaketalındı); 
        }
    }
}
