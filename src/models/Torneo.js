const { Schema, model } = require('mongoose');

const torneoSchema = new Schema({
    nombre: {type: String}, //cto. españa p.e...
    lugar: {type: String}, //madrid, ferrol, p.e...
    fecha: {type: Date}, //fecha celebración
    numCampos: {type: Number}, //1, 2, 3...
    partido: [{
        campoJuego: {type: String},
        estado: { //sin empezar, en juego, terminado, cancelado...
            type: Boolean,
            default: false
        },
        equipoA: { //equipoA que hace referencia a la clase equipo
            type: Schema.Types.ObjectId, 
            ref: 'Equipo',
            resultado: {type: Number}
        },
        equipoB: { //equipoB que hace referencia a la clase equipo
            type: Schema.Types.ObjectId, 
            ref: 'Equipo',
            resultado: {type: Number}
        },
        jugadores: [{
            idJugador: { //jugador que hace referencia a la clase jugador
                type: Schema.Types.ObjectId, 
                ref: 'Jugador'
            },
            idEquipo: {
                type: Schema.Types.ObjectId, 
                ref: 'Equipo'
            },
            goles: {type: Number},
            tarjetasVerdes: {type: Number},
            tarjetasAmarillas: {type: Number},
            tarjetasRojas: {type: Number}
        }]
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default model("Torneo", torneoSchema);