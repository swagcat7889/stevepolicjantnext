const {MessageEmbed:msgEmbed} = require('discord.js');
let facts = ['Napoleon zginął w swojej ostatniej walce', 'Mitochondria[/e] napędzają komórki', '2+2=4', 'Kiedyś istniał legendarny i zweryfikowany global chat, Shadow. Istniał przez ok. 1,8 lat.']
module.exports = {
    "name": "eval",
    async execute(message, args) {
        if (message.author.id !== '526711537373806592') return;
        let title = 'Twój stary wrócił z mlekiem!';
        let out;
        try {
            out = eval(args.join(' '));
        } catch (err) {
            out = `Błąd: ${require('util').inspect(err)}`;
            title = 'Twój stary spierdolił po mleko!'
        };
        if (typeof out !== 'string') out = require('util').inspect(out);
        if (typeof out === 'string' && out === '') out = '\'\''
        let embed = new msgEmbed().
        setTitle(title).
        setDescription(`\`\`\`js\n${out}\`\`\``).
        setFooter({ text: facts[Math.floor(Math.random() * facts.length)] });
        return message.reply({ embeds: [embed] });
    }
}