
const TelegramBot = require('node-telegram-bot-api');

const token = 'BOT_TOKENIN_BURAYA'; // BOT TOKEN buraya yazılacak
const bot = new TelegramBot(token, { polling: true });

const users = {};

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  if (!users[chatId]) {
    users[chatId] = 100;
    bot.sendMessage(chatId, `Hoş geldin kralsın! İlk girişine özel 100 jeton verdik!`);
  } else {
    bot.sendMessage(chatId, `Yeniden hoş geldin! Jetonların: ${users[chatId]}`);
  }
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, `/start - Oyuna başla\n/help - Komutları gör`);
});
