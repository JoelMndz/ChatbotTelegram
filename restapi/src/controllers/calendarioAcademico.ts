import services from '../services'
import {Request, Response} from 'express'
const {CalendarioAcademicoService} = services;
const calendarioAcademicoService = new CalendarioAcademicoService();

export class CalendarioAcademicoController{
  async getAll(req:Request, res:Response){
    try {
      const data = await calendarioAcademicoService.getAll();
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async create(req:Request, res:Response){
    try {
      const {body} = req;

      body.inicioClases = new Date(body.inicioClases)
      body.matriculaOrdinaria.fechaInicio = new Date(body.matriculaOrdinaria.fechaInicio)
      body.matriculaOrdinaria.fechaFin = new Date(body.matriculaOrdinaria.fechaFin)
      body.matriculaExtraordinaria.fechaInicio = new Date(body.matriculaExtraordinaria.fechaInicio)
      body.matriculaExtraordinaria.fechaFin = new Date(body.matriculaExtraordinaria.fechaFin)
      body.evaluacionP1.fechaInicio = new Date(body.evaluacionP1.fechaInicio)
      body.evaluacionP1.fechaFin = new Date(body.evaluacionP1.fechaFin)
      body.evaluacionP2.fechaInicio = new Date(body.evaluacionP2.fechaInicio)
      body.evaluacionP2.fechaFin = new Date(body.evaluacionP2.fechaFin)
      
      const data = await calendarioAcademicoService.create(body);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async delete(req:Request, res:Response){
    try {
      const {id} = req.params;
      const data = await calendarioAcademicoService.delete(id);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async consultas(req:Request, res:Response){
    try {
      const {tipo} = req.query;
      let data;
      if(tipo == '1'){
        data = await calendarioAcademicoService.getInicioClases()
      }else if (tipo == '2'){
        data = await calendarioAcademicoService.getFeriados()
      }else if (tipo == '3'){
        data = await calendarioAcademicoService.getMatriculaOrdinaria()
      }else if (tipo == '4'){
        data = await calendarioAcademicoService.getMatriculaExtraordinaria()
      }else if (tipo == '5'){
        data = await calendarioAcademicoService.getEvaluacionP1()
      }else if (tipo == '6'){
        data = await calendarioAcademicoService.getEvaluacionP2()
      }else{
        throw new Error('El tipo de consulta no existe!');
      }
      
      return res.json({data})
    } catch (error) {
      res.json({error});
    }
  }  

}
