import models from "../models";

const {CalendarioAcademicoModel} = models;

export class CalendarioAcademicoService{
  async getAll(){
    return await CalendarioAcademicoModel.find();
  }

  async create(entity:object){
    const data = await CalendarioAcademicoModel.create(entity);
    return data;
  }

  async delete(id:String) {
    return await CalendarioAcademicoModel.findByIdAndDelete(id);
  }

  async getInicioClases() {
    return await CalendarioAcademicoModel.findOne({estado:true},{_id:false,inicioClases:true})
  }

  async getFeriados(){
    return await CalendarioAcademicoModel.findOne({estado:true},{_id:false,feriados:true})
  }

  async getMatriculaOrdinaria(){
    return await CalendarioAcademicoModel.findOne({estado:true},{_id:false,matriculaOrdinaria:true})
  }

  async getMatriculaExtraordinaria(){
    return await CalendarioAcademicoModel.findOne({estado:true},{_id:false,matriculaExtraordinaria:true})
  }

  async getEvaluacionP1(){
    return await CalendarioAcademicoModel.findOne({estado:true},{_id:false,evaluacionP1:true})
  }

  async getEvaluacionP2(){
    return await CalendarioAcademicoModel.findOne({estado:true},{_id:false,evaluacionP2:true})
  }

}