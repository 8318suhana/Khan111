const fs = require("fs");
module.exports.config = {
        name: "by",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Bye",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("BYE")==0 || event.body.indexOf("bye")==0 || event.body.indexOf("Bye")==0 || event.body.indexOf("ByE")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐊𝐇𝐀𝐍    𝐒𝐀𝐇𝐀𝐁 \n__________________________________\n🙋  🄱🅈🄴 🄱🅈🄴 🄱🄰🄱🅄 🄼🄸🅂🅂 🅈🄾🅄 🄱🄷🅄🅃 🅂🄰🅁🄰  🙋\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/e30f07dd460f40ecc1fec3a0ea4d013f.gif`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥂", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
