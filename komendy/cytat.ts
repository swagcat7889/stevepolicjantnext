module.exports = {
    "name": "cytat",
    async execute(message, args) {
        message.channel.send(`${args.join(' ')}\n~${message.author.tag}, <t:${Math.floor(Date.now()/1000)}:R>`);
        message.delete();
    }
}