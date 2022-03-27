/*
    Configurar express y exportarlo
*/
import express from 'express'
import morgan from 'morgan';
import cors from 'cors'

import equiposRoutes from './routes/equipos.routes' //importamos las rutas de equipos
import jugadoresRoutes from './routes/jugadores.routes' //importamos las rutas de jugadores
import torneosRoutes from './routes/torneos.routes' //importamos las rutas de torneos

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) //que entienda los datos en formato json

app.use('/equipo', equiposRoutes)  //usamos las rutas de equipos. Todas esas rutas van a empezar por: '/equipo'
app.use('/jugador', jugadoresRoutes)  //usamos las rutas de jugador. Todas esas rutas van a empezar por: '/jugador'
app.use('/torneos', torneosRoutes)  //usamos las rutas de torneos. Todas esas rutas van a empezar por: '/torneos'

torneosRoutes

export default app;