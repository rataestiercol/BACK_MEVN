import {Router} from 'express'
const router = Router()

import * as jugadoresController from '../controllers/jugadores.controller'

router.post('/', jugadoresController.createJugador)
router.get('/', jugadoresController.getJugador)
router.get('/:id', jugadoresController.getJugadorById)
router.put('/:id', jugadoresController.updateJugadorById)
router.delete('/:id', jugadoresController.deleteJugadorById)

router.put('/addEquipo/:id', jugadoresController.guardarEquipoJugadorById)
router.get('/equiposJugador/:id', jugadoresController.getEquiposJugador)


export default router;