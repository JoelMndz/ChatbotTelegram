"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const calendarioAcademicoSchema = new mongoose_1.Schema({
    nombre: String,
    inicioClases: Date,
    matriculaOrdinaria: {
        fechaInicio: Date,
        fechaFin: Date
    },
    matriculaExtraordinaria: {
        fechaInicio: Date,
        fechaFin: Date
    },
    evaluacionP1: {
        fechaInicio: Date,
        fechaFin: Date
    },
    evaluacionP2: {
        fechaInicio: Date,
        fechaFin: Date
    },
    feriados: [
        {
            fechaInicio: Date,
            fechaFin: Date
        }
    ],
    estado: {
        type: Boolean,
        default: true
    }
});
exports.default = (0, mongoose_1.model)('calendarioAcademico', calendarioAcademicoSchema);
