const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '536514506:AAGcjUbfTIwguMWMykB2KfldvgpKvcr7MfM'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello from me, bot says: "Hi, ${msg.from.first_name}"')
    })
