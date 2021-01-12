const ytdl = require('ytdl-core');
const ytdl = require ('ytpl')
const Discord = require('discord.js')

mobile.exports.run = async (client, message, args, queue, searcher) => {
    const vc = message.member.voice.channel;
    if(!vc)
    return message.chanel.send("Please join a voice channel first!");

    let url= args.join("");
    if(url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)){
        await ytpl(url).then(async playlist => {
            
            console.log(playlist)
        })
            
        
    }


}

module.exports.config = {
    name: "play",
    aliases: ["p", "pl"] 
}