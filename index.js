const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log (`${bot.user.username} is online!`);
  bot.user.setActivity("toilet!help");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.displayiconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription ("Server Information")
    .setColor("#3333ff")
    .setThumbnail(sicon)
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField ("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)


    return message.channel.send(serverembed);
  }


  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Basically a toilet related bot created mainly for some laughs.")
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

  if(cmd ===  `${prefix}help`){
    var commandreply = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Look in your DMS!","The command list has been sent.")

    var cmdlist = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Commands:","prefix: toilet! \(eg. toilet!command\)\njoke: sends a random toilet related joke\nmeme: sends a random toilet related meme\nflush: \(eg.toilet!flush @user\) flushes a user of your choice")

    message.reply(commandreply)
    message.author.send(cmdlist)

  }

if(cmd ===  `${prefix}joke`){
    var joke1 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What did the poo say to the fart?", "You blow me away.")

    var joke2 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Why did the police officer sit on the toilet?", "To do his duty.")

   var joke3 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Confucius says,", "'Man who dig for watch in toilet bound to have shitty timing.'")

    var joke4 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Did you hear the joke about the poo?","Never mind, it's too dirty.")

    var joke5 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What did one toilet say to the other toilet?","You look flushed.")

    var joke6 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Did you hear about the new prices for toilet paper?","They're a rip off.")

    var joke7 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Why was Tigger in the toilet?","He was looking for Pooh.")

    var joke8 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What do toilets and anniversaries have in common?","Men ALWAYS miss them.")

    var joke9 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Why did the toilet roll down the hill?","To get to the bottom.")

    var joke10 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Confucius says,", "'Man who stand on toilet is high on pot.'")

    var joke11 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Why do ducks have feathers?","To cover their butt quack.")

    var joke12 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("For Christmas last year I got given Soduku toilet paper.","It's useless. You can only fill it with number ones and number twos.")

    var joke13 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Did you see the movie 'Diarrhea'?","It leaked so they had to release it early.")

    var joke14 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What do you call a magical poop?","Poodini.")

    var joke15 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Poop jokes aren't my favourite jokes.","But I'd say they are a solid #2.")

    var joke16 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Do you know about clown farts?","They smell funny.")

    var joke17 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Why couldn't the toilet paper cross the road?","It got stuck in a crack.")

    var joke18 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What do you call a fairy using the toilet?","Stinker-bell.")

    var joke19 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What do you call a country where everyone is pissed?","Uri-nation.")

    var joke20 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Why did they install a toilet at the garbage heap?","Because everyone had to take a dump.")

    var joke21 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Golf rules for beginners:","1) Back straight, knees bent, feet shoulder width apart.\n2) Form a loose grip.\n3) Keep your head down.\n4) Avoid a quick back swing.\n5) Stay out of the water.\n6) Try not to hit anyone.\n7) If you are taking too long, please let others go ahead of you.\n8) Don't stand directly in front of others.\n9) Quiet please ... while others are preparing to go.\n10) Don't take extra strokes.\nNow, that's very good. Flush the urinal, go outside, and tee off.")

    var joke22 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("I hate puns about toilet paper.","They're tearable.")

    var joke23 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("My doctor told me I had a bad case of diarrhea.","It scared the shit out of me.")

    var joke24 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("If it hurts when you pee,","urine trouble.")

    var joke25 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("The police station toilets were stolen. ","Investigators have nothing to go on.")

    var joke26 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("My wife's father spends a lot of time on the toilet.","He's my father-in-loo.")

    var joke27 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What do you call men in a bathroom?","Stand-up guys.")

    var joke28 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("Why do you never hear a pterodactyl go to the bathroom?","Because the 'P' is silent.")

    var joke29 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What does a relief map show?","Where the toilets are.")

    var joke30 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("After changing her children's diapers,","the mother was pretty pooped.")

    var joke31 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What part of a trilogy is always the stinker?","The turd part.")

    var joke31 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What's the best time to go to a bathroom?","Poo-thirty.")

    var joke32 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What's toilet paper's favourite music?","Rock and roll.")

    var joke33 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What do you call a criminal that steals toilet paper?","A poopertrator.")

    var joke34 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What do you call a police department that goes to the toilet?","NYPeeD.")

    var joke35 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("My mother told me to clean the toilet,","but it wasn't really my #1 priority.")

    var joke36 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("What's a toilet's favourite song?","We are Number One.")

    var joke37 = new Discord.RichEmbed()
    .setColor("#3333ff")
    .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
    .addField("You never really appreciate what you've got until it's gone.","Toilet paper is a good example.")

var jokes = [];

  jokes.push(joke1,joke2,joke3,joke4,joke5,joke6,joke7,joke8,joke9,joke10,joke11,joke12,joke13,joke14,joke15,joke16,joke17,joke18,joke19,joke20,joke21,joke22,joke23,joke24,joke25,joke26,joke27,joke28,joke29,joke30,joke31,joke32,joke32,joke34,joke35,joke36,joke37);

  return message.channel.send(jokes[Math.floor(Math.random()*37)]);

}

if (cmd === `${prefix}meme`){

  var meme1 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/6hrq7yL.jpg")

  var meme2 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://imgur.com/a/qYM4uP0")

  var meme3 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("http://www.dumpaday.com/wp-content/uploads/2013/10/funny-animals-41.jpg")

  var meme4 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/JvKNM3F.jpg")

  var meme5 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://img.buzzfeed.com/buzzfeed-static/static/2018-02/27/18/asset/buzzfeed-prod-fastlane-01/sub-buzz-30527-1519775484-2.png")

  var meme6 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/utqwPY5.jpg")

  var meme7 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://cdn.dopl3r.com/memes_files/preshitdent-trump-explained-with-a-poop-in-a-toilet-eqcol.jpg")

  var meme8 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/IuWpY49.jpg")

  var meme9 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/dqe7dPZ.jpg")

  var meme10 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://www.memecreator.org/static/images/memes/4851408.jpg")

  var meme11 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("http://farm8.staticflickr.com/7291/8733013429_391e7a0dfe_o.jpg")

  var meme12 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/K80Zp1t.jpg")

  var meme13 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/w8bZFhC.png")

  var meme14 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/5RdYq46.jpg")

  var meme15 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/qPSdSyh.jpg")

  var meme16 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/XQtMq2T.jpg")

  var meme17 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/hCLohBZ.jpg")

  var meme18 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.redd.it/vln8ydq5kkhy.jpg")

  var meme19 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://cdn.dopl3r.com/memes_files/when-youre-on-the-toilet-and-make-eye-contact-with-someone-through-the-opening-9YM5R.jpg")

  var meme20 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://d.justpo.st/media/images/2013/08/af1284e76daaa77a34aed3699dbd6af6.jpg")

  var meme21 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://cdn.someecards.com/posts/ichzbgr-26BSjt.jpg")

  var meme22 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://cdn.someecards.com/posts/poop-memes-Foi.png")

  var meme23 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://cdn.someecards.com/posts/ichzbgr-3-n5OGgZ.jpg")

  var meme24 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/JwTYcNt.png")

  var meme25 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/0Zfurs4.jpg")

  var meme26 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://homeworthylist.com/wp-content/uploads/2017/07/4407242.jpg")

  var meme27 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/2mq5gsL.jpg")

  var meme28 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/tN47WlS.jpg")

  var meme29 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/uvxHRyS.jpg")

  var meme30 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/uzzMgIv.jpg")

  var meme31 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/u6lT5hp.jpg")

  var meme32 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/ETinZGZ.jpg")

  var meme33 = new Discord.RichEmbed()
  .setColor("#3333ff")
  .setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
  .setImage("https://i.imgur.com/jgdDaOd.jpg")

var memes = [];

  memes.push(meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8, meme9, meme10, meme11, meme12, meme13, meme14, meme15, meme16,meme17,meme18,meme19,meme20,meme21,meme22,meme23,meme24,meme25,meme26,meme27,meme28,meme29,meme30,meme31,meme32,meme33)

 return message.channel.send(memes[Math.floor(Math.random()*33)]);
}

if (cmd === `${prefix}flush`){

var member = message.mentions.members.first();

var errormessage = new Discord.RichEmbed()
.setColor("#3333ff")
.setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
.addField("An error occurred,","Please specify a user by mentioning \(toilet!flush @user\) them.")

if (member == undefined) {
return message.channel.send(errormessage);
  }

var flush1 = new Discord.RichEmbed()
.setColor("#3333ff")
.setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
.setDescription("You flushed " + member)
.setImage("https://i.imgur.com/ZycBEeA.jpg")

var flush2 = new Discord.RichEmbed()
.setColor("#3333ff")
.setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
.setDescription("You flushed " + member)
.setImage("https://i.imgur.com/XX6TCIj.jpg")

var flush3 = new Discord.RichEmbed()
.setColor("#3333ff")
.setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
.setDescription("You flushed " + member)
.setImage("https://i.imgur.com/gMukJcF.jpg")

var flush4 = new Discord.RichEmbed()
.setColor("#3333ff")
.setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
.setDescription("You flushed " + member)
.setImage("https://fixitallplumbing.net/wp-content/uploads/2016/06/BabyReachinginToilet-e1465325076445.jpg")

var flush5 = new Discord.RichEmbed()
.setColor("#3333ff")
.setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
.setDescription("You flushed " + member)
.setImage("https://i.imgur.com/7rV9fJN.jpg")

var flush6 = new Discord.RichEmbed()
.setColor("#3333ff")
.setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
.setDescription("You flushed " + member)
.setImage("https://forrestanderson.net/wp-content/uploads/2018/02/My-Kid-flushed-a-toy-down-the-toilet-300x200.jpg")

var flush7 = new Discord.RichEmbed()
.setColor("#3333ff")
.setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
.setDescription("You flushed " + member)
.setImage("http://static.tvtropes.org/pmwiki/pub/images/watergodownthehole.jpg")

var flush8 = new Discord.RichEmbed()
.setColor("#3333ff")
.setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
.setDescription("You flushed " + member)
.setImage("https://i.imgur.com/RPBRRgz.jpg")

var flush9 = new Discord.RichEmbed()
.setColor("#3333ff")
.setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
.setDescription("You flushed " + member)
.setImage("https://cdn.drawception.com/images/panels/2012/5-15/AKLSe8mrrz-12.png")

var flush10 = new Discord.RichEmbed()
.setColor("#3333ff")
.setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
.setDescription("You flushed " + member)
.setImage("https://i.imgur.com/aYjpDRj.jpg")

var flush11 = new Discord.RichEmbed()
.setColor("#3333ff")
.setFooter("bot created by sync#8431", "https://cdn.discordapp.com/avatars/396164687475113984/4da65474b4fef103fde2dddcec191657.png?size=128")
.setDescription("You flushed " + member)
.setImage("https://i.gyazo.com/7f22b60416bc2cdb8fdb112afc186c97.png")

var flushes = [];

flushes.push(flush1,flush2,flush3,flush4,flush5,flush6,flush7,flush8,flush9,flush10,flush11)

return message.channel.send(flushes[Math.floor(Math.random()*11)]);

}

require('http').createServer().listen(3000)

});

client.login(process.env.TOKEN);
