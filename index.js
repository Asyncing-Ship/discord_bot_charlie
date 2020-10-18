// Run dotenv
require("dotenv").config();

const Discord = require("discord.js");
const bot = new Discord.Client();
let timeout = 900000;
bot.once("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  while (timeout <= 900000) {
    timeout++;
  }
});
bot.once(`reconnecting`, () => {
  console.log(`Reconnecting!`);
});
bot.once(`disconnect`, () => {
  console.log(`Disconnect!`);
});
bot.on("message", async (msg) => {
  if (timeout > 900000) {
    const command = msg.content.toLowerCase();
    if (Math.random() * 4 <= 0.001) msg.channel.send(`UwU`);
    if (Math.random() * 4 <= 0.001) msg.channel.send(`U WOT M8?`);
    if (msg.author.bot) return;
    //hype me up
    if (command.includes("oh sht")) {
      msg.channel.send(`Waddup :frog:`);
    }
    if (command.includes("asyncing") && command.includes("org")) {
      msg.channel.send("https://github.com/Asyncing-Ship");
    }
    if (command.includes("fs in the chat")) {
      msg.channel.send("F");
    }
    if (command.startsWith("!nerf")) {
      let message1 =
        "https://media3.giphy.com/media/1XeAoRH74h7i0MtwCU/giphy.gif";
      let message2 =
        "https://nerfthis2017.files.wordpress.com/2017/10/lttht525k9zf42vwh66v.gif";
      let message3 =
        "https://steamuserimages-a.akamaihd.net/ugc/178286983344997323/C3D967D62B0CA08007AEE7BAB561829ED287E8A4/";
      let message;
      switch (Math.floor(Math.random() * 3)) {
        case 1:
          message = message1;
          break;
        case 2:
          message = message2;
          break;
        default:
          message = message3;
          break;
      }
      msg.channel.send(`${message}`);
    }
    if (command.includes("nice job")) {
      msg.channel.send(`You too, ${msg.author}`);
    }
    if (command.includes("!simp")) {
      if (Math.random() * 5 < 4.7) {
        msg.channel.send(
          `https://media.tenor.com/images/9898a0f4c9e1e800834cd7a0251a3f8c/tenor.gif`
        );
      } else {
        msg.channel.send(
          `https://media.tenor.com/images/e726878c730cec0850a7fb4c3324f6a0/tenor.gif`
        );
      }
    }
    if (command.includes("!pog")) {
      msg.channel.send(
        `░░░░░░▒░░▄██▄░▒░░░░░░
       ░░░▄██████████▄▒▒░░░
       ░▒▄████████████▓▓▒░░ 
       ▓███▓▓█████▀▀████▒░░ 
       ▄███████▀▀▒░░░░▀█▒░░ 
       ████████▄░░░░░░░▀▄░░ 
       ▀██████▀░░▄▀▀▄░░▄█▒░ 
       ░█████▀░░░░▄▄░░▒▄▀░░ 
       ░█▒▒██░░░░▀▄█░░▒▄█░░ 
       ░█░▓▒█▄░░░░░░░░░▒▓░░ 
       ░▀▄░░▀▀░▒░░░░░▄▄░▒░░ 
       ░░█▒▒▒▒▒▒▒▒▒░░░░▒░░░ 
       ░░░▓▒▒▒▒▒░▒▒▄██▀░░░░ 
       ░░░░▓▒▒▒░▒▒░▓▀▀▒░░░░ 
       ░░░░░▓▓▒▒░▒░░▓▓░░░░░ 
       ░░░░░░░▒▒▒▒▒▒▒░░░░░░`
      );
    }
    //hype me up
    if (command.includes("shut up")) {
      if (command.includes("charlie")) {
        msg.channel.send("ok, sorry. :(");
        timeout = 0;
      } else {
        msg.channel.send(`yeah, shut up!`);
      }
    }
    //commands = show commands
    if (command.includes("!commands")) {
      msg.channel.send(
        `REPO: \nsends the link to the github repo\n\n
      HUNTER: \nHunter contact info\n\n
      KENT: \nKent's contact info (toDo)\n\n
      LEVI: \nLevi's contact info (toDo)\n\n
      Jared: \nJared's contact info (toDo)\n\n
      SCOPE: \n sends the scope document link\n\n
      WIREFRAME: \n sends the balsamiq link\n\n
      `
      );
    }
    if (command.includes("!hunter")) {
      msg.channel.send(
        `\nHunter Scheel\nHunter.scheel@outlook.com\n(701)429-0007\nhunterEdward98.github.io`
      );
    }
    if (command.includes("!kent")) {
      msg.channel.send(
        `\nKent Worthington\ntheaceco@protonmail.com\n(701)793-3976\ngithub.com/herschelw`
      );
    }
    if (command.includes("!ian")) {
      msg.channel.send(
        `\nIan Johnson\nianjohnson9042@gmail.com\n(701)388-3597 \nianjustus.com`
      );
    }
    if (command.includes("!jake")) {
      msg.channel.send(`Jake Schaffer\n605-940-0022\nimjakedev@gmail.com\n`);
    }
    if (command.includes("!levi")) {
      msg.channel.send(
        `\nLevi Carlson\nlevicarlson123@gmail.com\n(802)851-0009\nhttps://levee.github.io/`
      );
    }
    //change bot nickname
    else if (command.startsWith("!nickname")) {
      let words = msg.content.split(" ");
      if (words[1]) {
        if (!msg.guild.me.hasPermission("MANAGE_NICKNAMES"))
          return msg.channel.send(
            "I don't have permission to change my nickname!"
          );
        msg.guild.me.setNickname(msg.content.replace("nickname", ""));
        msg.channel.send(
          `YOU HAVE SET MY NICKNAME TO:${msg.content.replace("nickname", "")}.`
        );
      } else {
        msg.channel.send(
          `My nickname is ${msg.guild.me.nickname}. if you would like to change it, say nickname, then what you wish it to be`
        );
      }
    }
  }
});

bot.login(process.env.TOKEN);
