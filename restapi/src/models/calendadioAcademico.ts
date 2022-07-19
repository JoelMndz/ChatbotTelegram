import {model, Schema} from "mongoose";

const calendarioAcademicoSchema = new Schema({
  nombre: String,
  inicioClases: Date,
  matriculaOrdinaria:{
    fechaInicio: Date,
    fechaFin: Date
  },
  matriculaExtraordinaria:{
    fechaInicio: Date,
    fechaFin: Date
  },
  evaluacionP1:{
    fechaInicio: Date,
    fechaFin: Date
  },
  evaluacionP2:{
    fechaInicio: Date,
    fechaFin: Date
  },
  feriados:[
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

export default model('calendarioAcademico',calendarioAcademicoSchema);