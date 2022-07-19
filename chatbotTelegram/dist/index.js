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
const service_1 = require("./service");
const config_1 = __importDefault(require("./config"));
const { BOT_TOKEN } = config_1.default;
const menuTemplate = new telegraf_inline_menu_1.MenuTemplate(ctx => {
    const text = 'Chatbot del calendario academico de la *ULEAM* 🤖';
    return {
        text,
        parse_mode: 'Markdown'
    };
});
menuTemplate.interact('Inicio Clases', 'a', {
    do: (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, service_1.getInicioClases)(1);
        const fecha = new Date(data.data.inicioClases).toLocaleDateString();
        yield ctx.answerCbQuery(`Inicio de clases: ${fecha}`);
        return false;
    })
});
menuTemplate.interact('Exámenes P1', 'b', {
    joinLastRow: true,
    do: (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, service_1.getInicioClases)(5);
        const fechaInicio = new Date(data.data.evaluacionP1.fechaInicio).toLocaleDateString();
        const fechaFin = new Date(data.data.evaluacionP1.fechaFin).toLocaleDateString();
        yield ctx.answerCbQuery(`Examenes Parcial 1: ${fechaInicio} - ${fechaFin}`);
        return false;
    })
});
menuTemplate.interact('Exámenes P2', 'c', {
    joinLastRow: true,
    do: (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, service_1.getInicioClases)(6);
        const fechaInicio = new Date(data.data.evaluacionP2.fechaInicio).toLocaleDateString();
        const fechaFin = new Date(data.data.evaluacionP2.fechaFin).toLocaleDateString();
        yield ctx.answerCbQuery(`Examenes Parcial 2: ${fechaInicio} - ${fechaFin}`);
        return false;
    })
});
menuTemplate.interact('Matrícula Ordinaria', 'd', {
    do: (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, service_1.getInicioClases)(3);
        const fechaInicio = new Date(data.data.matriculaOrdinaria.fechaInicio).toLocaleDateString();
        const fechaFin = new Date(data.data.matriculaOrdinaria.fechaFin).toLocaleDateString();
        yield ctx.answerCbQuery(`Matrícula Ordinaria: ${fechaInicio} - ${fechaFin}`);
        return false;
    })
});
menuTemplate.interact('Matrícula Extraordinaria', 'e', {
    joinLastRow: true,
    do: (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, service_1.getInicioClases)(4);
        const fechaInicio = new Date(data.data.matriculaExtraordinaria.fechaInicio).toLocaleDateString();
        const fechaFin = new Date(data.data.matriculaExtraordinaria.fechaFin).toLocaleDateString();
        yield ctx.answerCbQuery(`Matrícula Extraordinaria: ${fechaInicio} a ${fechaFin}`);
        return false;
    })
});
menuTemplate.interact('Próximos Feriados', 'f', {
    do: (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        yield ctx.answerCbQuery('No hay feriados 😪');
        return false;
    })
});
const bot = new telegraf_1.Telegraf(BOT_TOKEN);
const menuMiddleware = new telegraf_inline_menu_1.MenuMiddleware('/', menuTemplate);
bot.command('start', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.replyWithPhoto('https://www.uleam.edu.ec/wp-content/uploads/2012/09/LOGO-ULEAM-VERTICAL.png');
    menuMiddleware.replyToContext(ctx);
}));
bot.use(menuMiddleware);
bot.launch();
