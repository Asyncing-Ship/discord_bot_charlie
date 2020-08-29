// Run dotenv
require("dotenv").config();

const Discord = require("discord.js");
const bot = new Discord.Client();
bot.once("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});
bot.once(`reconnecting`, () => {
  console.log(`Reconnecting!`);
});
bot.once(`disconnect`, () => {
  console.log(`Disconnect!`);
});
bot.on("message", async (msg) => {
  const command = msg.content.toLowerCase();
  if (Math.random() * 4 <= 0.01) msg.channel.send(`UwU`);
  if (Math.random() * 4 <= 0.01) msg.channel.send(`U WOT M8?`);
  if (msg.author.bot) return;
  //hype me up
  if (command.includes("repo")) {
    let message =
      "repository: https://github.com/Asyncing-Ship/turtle_mountain";
    msg.channel.send(`${message}`);
  }
  if (command.includes("oh sht")) {
    msg.channel.send(`Waddup :frog:`);
  }
  if (command.includes("dad")) {
    msg.channel.send(
      ":confounded:  daddy " +
        msg.author.username +
        " :sweat_drops: :eggplant: "
    );
  }
  if (
    command.includes("lol.") ||
    command.includes("iol.") ||
    command.includes("loi.") ||
    command.includes("ioi.")
  ) {
    if (command.includes("lol.")) {
      msg.channel.send(":hearts: Lots of love :hearts:");
    }
    if (
      command.includes("iol.") ||
      command.includes("loi.") ||
      command.includes("ioi.")
    ) {
      msg.channel.send(
        "https://thumbs.gfycat.com/BlindForkedGoldenretriever-size_restricted.gif"
      );
    }
  }
  if (command.includes("fs in the")) {
    msg.channel.send("F");
  }
  if (command.includes("scope")) {
    msg.channel.send(`
    https://docs.google.com/document/d/1btFNSfnXun4piPZNh7NcklF67KnIAH7euiD7GmNfwXI/edit`);
  }
  if (command.startsWith("wireframe")) {
    let message = "wireframe: https://balsamiq.cloud/shcoshj/pjo3j3w/rAD7A";
    msg.channel.send(`${message}`);
  }
  if (command.startsWith("nerf")) {
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
  if (command.includes("simp")) {
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
  if (command.includes("pog")) {
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
  if (command.includes("shut up")) msg.channel.send(`yeah, shut up!`);
  //commands = show commands
  if (command.includes("commands")) {
    msg.channel.send(
      `REPO: \nsends the link to the github repo\n\n
      POC: \nHunter contact info\n\n
      SCOPE: \n sends the scope document link\n\n
      WIREFRAME: \n sends the balsamiq link\n\n
      `
    );
  }
  if (command.includes("poc")) {
    msg.channel.send(
      `Person of color: \nHunter Scheel\nHunter.scheel@outlook.com\n(701)429-0007`
    );
  }
  //change bot nickname
  else if (command.startsWith("nickname")) {
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
});

bot.login(process.env.TOKEN);
