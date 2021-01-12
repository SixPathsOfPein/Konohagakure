module.exports.run = (message) => {
    message.channel.send("Hello!");
    
}

module.exports.config = {
    name: "Hello",
    aliases: ["hi", "hey", "yo"]
}