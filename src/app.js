/*
    Configurar express y exportarlo
*/
import express from 'express'
import morgan from 'morgan';
import cors from 'cors'


import equiposRoutes from './routes/equipos.routes' //importamos las rutas de equipos

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) //que entienda los datos en formato json

app.use('/equipo', equiposRoutes)  //usamos las rutas de equipos. Todas esas rutas van a empezar por: '/equipo'

export default app;