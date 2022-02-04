// @ts-ignore
const {Client, Collection, MessageEmbed} = require('discord.js');
const {readdirSync:f_rd,existsSync:eS,writeFileSync:f_wfs} = require('fs');
const milisec = require('ms');

global.serverConf = {
    get(a, b) {
        return (new (require('nope.db'))({
            path: `./srv_setts/${a}.json`,
            seperator: '.',
            spaces: 4
        })).get(b);
    },
    set(a, b, c) {
        return (new (require('nope.db'))({
            path: `./srv_setts/${a}.json`,
            seperator: '.',
            spaces: 4
        })).set(b, c);
    },
    delete(a, b) {
        return (new (require('nope.db')({
            path: `./srv_setts/${a}.json`,
            seperator: '.',
            spaces: 4
        }))).delete(b);
    },
    add(a, b) {
        const asdf = new (require('nope.db'))({
            path: `./srv_setts/${a.json}`,
            seperator: '.',
            spaces: 4
        });
        let c = asdf.get(b);
        let _c = typeof c === 'number' ? c : 0
        _c += 1;
        return asdf.set(b, _c);
    }
};

/* TODO: Jednak trochę za dużo na ten dzień */
/* AAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAAAAAAA 
*/
// global.izolatka = async (message, victim, time) => {
//     message.guild.members.cache.get(victim.id).roles
//     const msg = await message.channel.send(`<@!${victim.id}> był złym stivkiem, więc jest w izolatce`);
//     msg.react('❤️');
// }

if (!eS('./config.json')) {
    f_wfs('./config.json', JSON.stringify({
        prefix: 'snext ',
        compat_version: 0,
        developer: '526711537373806592'
    }));
}

if (!eS('./.env')) {
    f_wfs('./.env', 'token=FHDighgiuGggGGGg.FHDuihsg.DfigwigigeriurbG');
    process.stdout.write('Proszę zmień token w .env i uruchom bota ponownie.\n');
    process.exit(254);
};

const {prefix} = require('./config.json');
const {config:dt} = require('dotenv');
dt();

const cmdDir = f_rd('./komendy').filter((f) => f.endsWith('.js'));

const client = new Client({ intents: [32767] });
client.commands = new Collection();

for (let i = 0; i < cmdDir.length; i += 1) {
    const cemd = require(`./komendy/${cmdDir[i]}`);
    console.log(cemd);
    client.commands.set(cemd.name, cemd);
};

client.on('ready', async () => {
    process.stdout.write('Steve Next online\n');
});

client.on('messageCreate', async (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = client.commands.get(args[0]);
    console.log(args);
    console.log(cmd);
    if (cmd === undefined) return;
    try {
        await cmd.execute(message, args.slice(1));
    } catch (err) {
        console.error(err);
        return message.reply(`${err.name}: ${err.message}\n`);
    };
});

process.on('unhandledRejection', async (err) => {
    console.error(err);
});

client.login(process.env.token);