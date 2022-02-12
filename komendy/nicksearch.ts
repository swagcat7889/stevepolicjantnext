module.exports = {
    "name": "nsearch",
    async execute(message, args) {
        if (args[0] === undefined) return message.reply('Nick?');

        let b = [];

        let c = [];

        message.client.users.cache.forEach((a) => {
            if (!a.name.includes(args[0])) return;
            // @ts-ignore
            b.push(a);
        });

        message.guild.members.cache.forEach((a) => {
            let d = message.client.users.cache.get(a.id);
            if (!d.name.includes(args[0])) return;
            // @ts-ignore
            c.push(d);
        })
        return message.reply(`Znaleziono ${b.length} użytkowników globalnie, ${c.length} na serwerze.`);
    }
}