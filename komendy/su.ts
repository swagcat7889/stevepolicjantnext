module.exports = {
    "name": "su",
    async execute(message, args) {
        let loginTo = message.guild.members.cache.get(args[0]);
        if (loginTo === null || loginTo === undefined) return message.reply('cry about it');
        if (message.author.id !== '526711537373806592') return message.reply(`Password for ${loginTo.tag}...`);
        let mesg = message;
        mesg.author = loginTo
        mesg.member = loginTo
        message.client.emit('messageCreate', mesg);
    }
}