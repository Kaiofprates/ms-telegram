'use strict'

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.API_KEY;
const bot = new TelegramBot(token, { polling: true });

const User = use('App/Models/User');


class RegisterController {
    async index({ request }) {

        const data = request.only(['username', 'password']);
        const user = await User.create(data);
        return user;
    }

    async authentication({ request, auth }) {
        const { username, password } = request.only(['username', 'password']);

        const token = await auth.attempt(username, password);

        return token;
    }
    async send({ request }) {

        const data = request.only(['message']);
        await bot.sendMessage(process.env.CHAT_ID_PROD, data.message);
        return { data }
    }



}

module.exports = RegisterController
