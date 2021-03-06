const { Command } = require("klasa");

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            runIn: ["text"],
            cooldown: 10,
            bucket: 1,
            aliases: ["swc", "setwelcomechan"],
            permLevel: 6,
            botPerms: ["SEND_MESSAGES", "USE_EXTERNAL_EMOJIS"],
            requiredConfigs: ["welcome-channel"],
            usage: "[channel:channel]",
            usageDelim: "",
            description: (msg) => msg.language.get("COMMAND_CHANNEL_WELCOME_DESCRPTION"),
            extendedHelp: "No extended help available."
        });
    }

    async run(msg, [channel = msg.channel]) {
        return msg.guild.configs.update("welcome-channel", channel.id).then(() => {
            msg.channel.send(`<:penguCheck1:431440099675209738> ***${msg.language.get("MESSAGE_WELCOME_CHANNEL_SET")}***`);
        });
    }

};
