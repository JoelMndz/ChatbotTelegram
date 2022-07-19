"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const config_1 = __importDefault(require("../config"));
const mongoose_1 = __importDefault(require("mongoose"));
function dbConnection() {
    mongoose_1.default.connect(config_1.default.MONGO_URI)
        .then(() => {
        console.log('BD conectada!');
    })
        .catch(() => {
        console.log('Error ***********');
    });
}
exports.dbConnection = dbConnection;
