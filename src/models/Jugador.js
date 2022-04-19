const { Schema, model } = require('mongoose');

const jugadorSchema = new Schema({
    nombre: {type: String},
    fechaNacimiento: {type: Date}
}, {
    timestamps: true,
    versionKey: false
});

export default model("Jugador", jugadorSchema);