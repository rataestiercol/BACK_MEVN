import {Router} from 'express'
const router = Router()

import * as equiposController from '../controllers/jugadores.controller'

router.post('/', jugadoresController.createJugador)
router.get('/', jugadoresController.getJugador)
router.get('/:id', jugadoresController.getJugadorById)
router.put('/:id', jugadoresController.updateJugadorById)
router.delete('/:id', jugadoresController.deleteJugadorById)

export default router;