"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== "production") {
    (0, dotenv_1.config)();
}
exports.default = {
    API: process.env.API,
    BOT_TOKEN: process.env.BOT_TOKEN
};
