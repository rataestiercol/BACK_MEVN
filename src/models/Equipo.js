const { Schema, model } = require('mongoose');

const equipoSchema = new Schema({
    nombre: {type: String},
    logoUrl: {type: String},
    emailContacto: {type: String},
    jugadores: [{
        jugador: {
            type: Schema.Types.ObjectId, 
            ref: 'Jugador'
        },
        dorsal: {type: String}
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default model("Equipo", equipoSchema);