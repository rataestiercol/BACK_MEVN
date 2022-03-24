/*
    Configurar express y exportarlo
*/
import express from 'express'
import morgan from 'morgan';
import cors from 'cors'

import equiposRoutes from './routes/equipos.routes' //importamos las rutas de equipos
import jugadoresRoutes from './routes/jugadores.routes' //importamos las rutas de jugadores

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) //que entienda los datos en formato json

app.use('/equipo', equiposRoutes)  //usamos las rutas de equipos. Todas esas rutas van a empezar por: '/equipo'
app.use('/jugador', jugadoresRoutes)  //usamos las rutas de jugador. Todas esas rutas van a empezar por: '/jugador'

export default app;