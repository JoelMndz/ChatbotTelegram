"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const config_1 = __importDefault(require("./config"));
const { PORT } = config_1.default;
const { CalendarioAcademicoRoute } = routes_1.default;
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configutarion();
        this.middlewares();
        this.routes();
    }
    configutarion() {
        this.app.set('port', PORT);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                name: 'REST API - CALENDARIO ACADEMICO ULEAM'
            });
        });
        this.app.use('/api/calendario-academico', CalendarioAcademicoRoute);
    }
    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}
exports.default = Server;
