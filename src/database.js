/*
    conexión a la ddbb y configuración
*/

import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/kp_database_VUE', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(db => console.log('DB is CONECTED'))
    .catch(err => console.log(err));