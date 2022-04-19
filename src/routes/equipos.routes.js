import {Router} from 'express'
const router = Router()

import * as equiposController from '../controllers/equipos.controller'

router.post('/', equiposController.createEquipo)
router.get('/', equiposController.getEquipos)
router.get('/:id', equiposController.getEquipoById)
router.put('/:id', equiposController.updateEquipoById)
router.delete('/:id', equiposController.deleteEquipoById)

router.get('/equipos/:id', equiposController.consultarEquipoYJugadores)

export default router;