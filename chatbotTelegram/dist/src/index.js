"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const telegraf_inline_menu_1 = require("telegraf-inline-menu");
const config_1 = __importDefault(require("./config"));
const { BOT_TOKEN } = config_1.default;
const menuTemplate = new telegraf_inline_menu_1.MenuTemplate('Menu principal');
menuTemplate.interact('Inicio Clases', 'a', {
    do: (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        yield ctx.answerCbQuery('En desarrollo...');
        return false;
    })
});
menuTemplate.interact('Exámenes P1', 'b', {
    joinLastRow: true,
    do: (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        yield ctx.answerCbQuery('En desarrollo...');
        return false;
    })
});
menuTemplate.interact('Exámenes P2', 'c', {
    joinLastRow: true,
    do: (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        yield ctx.answerCbQuery('En desarrollo...');
        return false;
    })
});
menuTemplate.interact('Matrícula Ordinaria', 'd', {
    do: (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        yield ctx.answerCbQuery('En desarrollo...');
        return false;
    })
});
menuTemplate.interact('Matrícula Extraordinaria', 'e', {
    joinLastRow: true,
    do: (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        yield ctx.answerCbQuery('En desarrollo...');
        return false;
    })
});
menuTemplate.interact('Próximos Feriados', 'f', {
    do: (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        yield ctx.answerCbQuery('En desarrollo...');
        return false;
    })
});
const bot = new telegraf_1.Telegraf(BOT_TOKEN);
const menuMiddleware = new telegraf_inline_menu_1.MenuMiddleware('/', menuTemplate);
bot.command('start', ctx => menuMiddleware.replyToContext(ctx));
bot.use(menuMiddleware);
bot.launch();
