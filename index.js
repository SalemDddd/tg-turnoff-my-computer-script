const { exec } = require("child_process");
const { Telegraf } = require("telegraf");

const bot = new Telegraf("");
bot.start((ctx) => ctx.reply("Welcome"));

bot.help((ctx) => ctx.reply("Send me a sticker"));

bot.hears("off", (ctx) => {
  exec("shutdown /p", (error, stdout, stderr) => {
    if (error) {
      ctx.reply("Error");
      return;
    }
    ctx.reply("Computer will turn off");
  });
});

bot.hears("reboot", (ctx) => {
  exec("shutdown /r", (error, stdout, stderr) => {
    if (error) {
      ctx.reply("Error");
      return;
    }
    ctx.reply("Computer will turn off");
  });
});
bot.launch();
