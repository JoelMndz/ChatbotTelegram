"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== "production") {
    (0, dotenv_1.config)();
}
exports.default = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    SECRET: process.env.SECRET
};
