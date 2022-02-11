module.exports = {
    "name": "odizoluj",
    async execute(message, args) {
        if (global.serverConf.get(message.guild.id, 'editrola') === null) throw new Error('Rola do edycji nie została zdefiniowana!');
        if (global.serverConf.get(message.guild.id, 'stivekrola') === null) throw new Error('Rola Stivek nie zdefiniowana!');
        if (global.serverConf.get(message.guild.id, 'izolatkarola') === null) throw new Error('Rola Izolatka nie zdefiniowana!');
        if (global.serverConf.get(message.guild.id, 'kanalkary') === null) throw new Error('Kanał od kar nie został zdefiniowany!');
        
        if (!message.guild.members.cache.get(message.author.id).roles.cache.some((r) => r.id === global.serverConf.get(message.guild.id, 'editrola'))) return message.reply('No i nie masz no i nie masz roli...');

        let victim = message.mentions.members.first();

        if (!victim) return message.reply(`
        Bunger:tm: MindRead Ability
        Pozwala na:
        > Czytanie w myślach
        :)
        `);

        global.unizoluj(message, victim);
    }
}