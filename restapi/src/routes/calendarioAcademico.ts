import {Router} from 'express'
import controllers from '../controllers'

const router = Router();
const {CalendarioAcademicoController} = controllers;
const calendarioAcademicoController = new CalendarioAcademicoController();

router.get('/', calendarioAcademicoController.getAll);

router.post('/', calendarioAcademicoController.create);

router.delete('/:id', calendarioAcademicoController.delete);

router.get('/consultas', calendarioAcademicoController.consultas)

export default router