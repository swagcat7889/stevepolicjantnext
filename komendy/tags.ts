// @ts-ignore
const {Collection} = require('discord.js');

const Db = require('nope.db');
const db = new Db({
    path: './pseudodb/tags.json',
    seperator: '.',
    spaces: 4
});

class ConfigurationError extends Error {};

module.exports = {
    "name": "tags",
    async execute(message, args) {
        if (global.serverConf.get(message.guild.id, 'editrola') === null) throw new ConfigurationError('Rola do edycji tagów nie została zdefiniowana!');
        switch (args[0]) {
            case 'create':
            case 'set':
                if (!message.guild.members.cache.get(message.author.id).roles.cache.some((asdf) => asdf.id === global.serverConf.get(message.guild.id, 'editRola'))) return message.reply('Nie masz roli!');
                // db.set(args[1], args.slice(2).join(' '));
                if (args[1] === 'create') return message.reply('huh?');
                if (args[1] === undefined) return message.reply('huh?'); 
                if (args.slice(2).join(' ') === '') return message.reply('huh?');
                global.serverConf.set(message.guild.id, `abc${args[1]}`, args.slice(2).join(' '));
                message.reply('Ustawiono.');
                break;
            case 'eradicate':
            case 'delete':
            case 'prune':
                if (!message.guild.members.cache.get(message.author.id).roles.cache.some((asdf) => asdf.id === global.serverConf.get(message.guild.id, 'editRola'))) return message.reply('Nie masz roli!');
                if (args[1] === undefined) {
                    global.serverConf.clear();
                    return message.reply('Wyczyszczono')
                } else {
                    global.serverConf.delete(args[1]);
                    return message.reply('Usunięto');
                }
                break;
            default:
                let data = global.serverConf.get(message.guild.id, `abc${args[0]}`);
                return message.reply(`${data === null ? 'Nie znaleziono taga' : data}`);
        }
    }
};
