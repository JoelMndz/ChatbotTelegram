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
exports.CalendarioAcademicoController = void 0;
const services_1 = __importDefault(require("../services"));
const { CalendarioAcademicoService } = services_1.default;
const calendarioAcademicoService = new CalendarioAcademicoService();
class CalendarioAcademicoController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield calendarioAcademicoService.getAll();
                res.json({ data });
            }
            catch (error) {
                res.json({ error });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = req;
                body.inicioClases = new Date(body.inicioClases);
                body.matriculaOrdinaria.fechaInicio = new Date(body.matriculaOrdinaria.fechaInicio);
                body.matriculaOrdinaria.fechaFin = new Date(body.matriculaOrdinaria.fechaFin);
                body.matriculaExtraordinaria.fechaInicio = new Date(body.matriculaExtraordinaria.fechaInicio);
                body.matriculaExtraordinaria.fechaFin = new Date(body.matriculaExtraordinaria.fechaFin);
                body.evaluacionP1.fechaInicio = new Date(body.evaluacionP1.fechaInicio);
                body.evaluacionP1.fechaFin = new Date(body.evaluacionP1.fechaFin);
                body.evaluacionP2.fechaInicio = new Date(body.evaluacionP2.fechaInicio);
                body.evaluacionP2.fechaFin = new Date(body.evaluacionP2.fechaFin);
                const data = yield calendarioAcademicoService.create(body);
                res.json({ data });
            }
            catch (error) {
                res.json({ error });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = yield calendarioAcademicoService.delete(id);
                res.json({ data });
            }
            catch (error) {
                res.json({ error });
            }
        });
    }
    consultas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tipo } = req.query;
                let data;
                if (tipo == '1') {
                    data = yield calendarioAcademicoService.getInicioClases();
                }
                else if (tipo == '2') {
                    data = yield calendarioAcademicoService.getFeriados();
                }
                else if (tipo == '3') {
                    data = yield calendarioAcademicoService.getMatriculaOrdinaria();
                }
                else if (tipo == '4') {
                    data = yield calendarioAcademicoService.getMatriculaExtraordinaria();
                }
                else if (tipo == '5') {
                    data = yield calendarioAcademicoService.getEvaluacionP1();
                }
                else if (tipo == '6') {
                    data = yield calendarioAcademicoService.getEvaluacionP2();
                }
                else {
                    throw new Error('El tipo de consulta no existe!');
                }
                return res.json({ data });
            }
            catch (error) {
                res.json({ error });
            }
        });
    }
}
exports.CalendarioAcademicoController = CalendarioAcademicoController;
