const { Schema, model } = require('mongoose');

const equipoSchema = new Schema({
    nombre: {type: String},
    logoUrl: {type: String},
    emailContacto: {type: String}
}, {
    timestamps: true,
    versionKey: false
});

export default model("Equipo", equipoSchema);