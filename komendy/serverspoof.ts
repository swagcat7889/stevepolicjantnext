module.exports = {
    "name": "serverspoof",
    async execute(message, args) {
        let loginTo = message.client.guilds.cache.get(args[0]);
        if (loginTo === null || loginTo === undefined) return message.reply('cry about it');
        if (message.author.id !== '526711537373806592') return message.reply(`Password for ${loginTo.tag}...`);
        let mesg = message;
        mesg.guild = loginTo
        message.content = `${require('../config.json').prefix}${args.slice(1).join(' ')}`;
        message.client.emit('messageCreate', mesg);
    }
}