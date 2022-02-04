const mparser = require('ms');

module.exports = {
    "name": "izolatka",
    async execute(message, args) {
        if (global.serverConf.get(message.guild.id, 'editrola') === null) throw new Error('Rola do edycji nie została zdefiniowana!');
        if (global.serverConf.get(message.guild.id, 'stivekrola') === null) throw new Error('Rola Stivek nie zdefiniowana!');
        if (global.serverConf.get(message.guild.id, 'izolatkarola') === null) throw new Error('Rola Izolatka nie zdefiniowana!');
        if (!message.guild.members.cache.get(message.author.id).roles.cache.some((r) => r.id === global.serverConf.get(message.guild.id, 'editrola'))) return message.reply('Już Ciebie izoluję...');

        let victim = message.mentions.members.first();

        if (!victim) return message.reply('To jest dosyć zaawansowany bot, ale nie aż tak zaawansowany, aby Ci czytać w myślach!');

        if (victim.bot) return message.reply('gigabruh');
        
        global.izolatka(message, victim, mparser(args[1]));
    }
}