import {Router} from 'express'
const router = Router()

import * as torneosController from '../controllers/torneos.controller'

router.post('/', torneosController.createTorneo)
router.get('/', torneosController.getTorneos)
router.get('/:id', torneosController.getTorneoById)
router.put('/:id', torneosController.updateTorneoById)
router.delete('/:id', torneosController.deleteTorneoById)
router.post('/:id', torneosController.guardarPartido)

router.get('/partidos/:id', torneosController.consultarPartidos)

export default router;