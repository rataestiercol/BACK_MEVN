import Equipo from '../models/Equipo'
import Jugador from '../models/Jugador'
var ObjectId = require('mongoose').Types.ObjectId; 


export const createEquipo = async (req, res) => {
    const {nombre, logoUrl, emailContacto} = req.body;

    const newEquipo = new Equipo({nombre, logoUrl, emailContacto})
    const equipoGuardado = await newEquipo.save()
    
    res.json(equipoGuardado);   
}

export const getEquipos = async (req, res) => {
    const equiposTodos = await Equipo.find();

    res.json(equiposTodos);
}

export const getEquipoById = async (req, res) => {
    const { id } = req.params;
    const equipo = await Equipo.findById(id);

    res.json(equipo);
}

export const updateEquipoById = async (req, res) => {
    const { id } = req.params;
    const {nombre, logoUrl, emailContacto} = req.body;
    const equipoActualizado = await Equipo.findByIdAndUpdate(id, {nombre, logoUrl, emailContacto}, {
        new:true
    });

    res.json(equipoActualizado);
}

export const deleteEquipoById = async (req, res) => {
    const { id } = req.params;
    const equipoEliminado = await Equipo.findByIdAndDelete(id);

    res.json(equipoEliminado);
}


export const consultarEquipoYJugadores = async (req, res) => {
    const { id } = req.params;
    // busca en bbdd de jugadores el id del equipo

    try {
        const jugadores = await Jugador
                .find({ 'equipos.equipo': id })
                .populate("equipos.equipo");

        res.send(jugadores)
    }
    catch(error){
        console.log(`ERROR: ${error}`);
    }

}


