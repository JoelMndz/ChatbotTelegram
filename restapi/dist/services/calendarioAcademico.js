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
exports.CalendarioAcademicoService = void 0;
const models_1 = __importDefault(require("../models"));
const { CalendarioAcademicoModel } = models_1.default;
class CalendarioAcademicoService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CalendarioAcademicoModel.find();
        });
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield CalendarioAcademicoModel.create(entity);
            return data;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CalendarioAcademicoModel.findByIdAndDelete(id);
        });
    }
    getInicioClases() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CalendarioAcademicoModel.findOne({ estado: true }, { _id: false, inicioClases: true });
        });
    }
    getFeriados() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CalendarioAcademicoModel.findOne({ estado: true }, { _id: false, feriados: true });
        });
    }
    getMatriculaOrdinaria() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CalendarioAcademicoModel.findOne({ estado: true }, { _id: false, matriculaOrdinaria: true });
        });
    }
    getMatriculaExtraordinaria() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CalendarioAcademicoModel.findOne({ estado: true }, { _id: false, matriculaExtraordinaria: true });
        });
    }
    getEvaluacionP1() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CalendarioAcademicoModel.findOne({ estado: true }, { _id: false, evaluacionP1: true });
        });
    }
    getEvaluacionP2() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CalendarioAcademicoModel.findOne({ estado: true }, { _id: false, evaluacionP2: true });
        });
    }
}
exports.CalendarioAcademicoService = CalendarioAcademicoService;
