const {Permissions:prms} = require('discord.js');

module.exports = {
    "name": "settings",
    async execute(message, args) {
        if (!message.member.permissions.has(prms.FLAGS.BAN_MEMBERS)) {
            return message.reply('Error: Brak permisji');
        };
        switch (args[0]) {
            case 'edit':
                switch (args[1]) {
                    case 'adminrole':
                        if (isNaN(parseInt(args[2], 10))) return message.reply('404 invalid rola');
                        if (parseInt(args[2], 10) < message.guild.id) return message.reply('Na serio myślisz, że się na to nabiorę?');
                        global.serverConf.set(message.guild.id, 'editrola', args[2]);
                        return message.reply('Gotowe!');
                        break;
                    case 'stivekrola':
                        if (isNaN(parseInt(args[2], 10))) return message.reply('404 invalid rola');
                        if (parseInt(args[2], 10) < message.guild.id) return message.reply('Na serio myślisz, że się na to nabiorę?');
                        global.serverConf.set(message.guild.id, 'stivekrola', args[2]);
                        return message.reply('Gotowe!');
                        break;
                    case 'izolatkarola':
                        if (isNaN(parseInt(args[2], 10))) return message.reply('404 invalid rola');
                        if (parseInt(args[2], 10) < message.guild.id) return message.reply('Na serio myślisz, że się na to nabiorę?');
                        global.serverConf.set(message.guild.id, 'izolatkarola', args[2]);
                        return message.reply('Gotowe!');
                        break;
                    default:
                        return message.reply('Jak coś to możesz użyć adminrole...');
                }
                break;
            default:
                return message.reply('Jak coś to możesz użyć edit...');
        }
    }
};