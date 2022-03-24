const { Schema, model } = require('mongoose');

const jugadorSchema = new Schema({
    nombre: {type: String},
    fechaNacimiento: {type: Date},
    equipos: [{
        equipo: {
            type: Schema.Types.ObjectId, 
            ref: 'equipo'
        },
        dorsal: {type: String}
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default model("Jugador", jugadorSchema);