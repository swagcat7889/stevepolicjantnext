const ms = require('ms');

let sleep = (ms) => new Promise((a) => setTimeout(a, ms));

module.exports = {
    "name": "warn",
    async execute(message, args) {
        if (global.serverConf.get(message.guild.id, 'editrola') === null) throw new Error('Rola do edycji nie została zdefiniowana!');
        if (global.serverConf.get(message.guild.id, 'stivekrola') === null) throw new Error('Rola Stivek nie zdefiniowana!');
        if (global.serverConf.get(message.guild.id, 'izolatkarola') === null) throw new Error('Rola Izolatka nie zdefiniowana!');
        if (!message.guild.members.cache.get(message.author.id).roles.cache.some((r) => r.id === global.serverConf.get(message.guild.id, 'editrola'))) return message.reply('Już Ciebie warnuję...');

        let victim = message.mentions.members.first();

        if (!victim) {
            return message.reply('Super, nie ma kogo zwarnować...');
        }
        
        global.warn(message, victim);
    }
}