/*
    Archivo principal de la app.
    Sirve para que arranque la aplicación.
*/

import app from './app'
import './database'

console.log("FUNCIONANDO en puerto", 4000);
app.listen(4000)