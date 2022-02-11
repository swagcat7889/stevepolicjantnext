module.exports = {
    "name": "powiedz",
    async execute(message, args) {
        if (global.serverConf.get(message.guild.id, 'editrola') === null) throw new Error('Rola do edycji nie została zdefiniowana!');
        
        if (!message.guild.members.cache.get(message.author.id).roles.cache.some((r) => r.id === global.serverConf.get(message.guild.id, 'editrola'))) return message.reply('No i nie masz no i nie masz roli...');

        message.delete();
        return message.channel.send(args.join(' '));
    }
}