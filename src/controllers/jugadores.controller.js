import Jugador from '../models/Jugador'

export const createJugador = async (req, res) => {
    const {nombre, fechaNacimiento} = req.body;
    console.log({nombre, fechaNacimiento});

    const newJugador = new Jugador({nombre, fechaNacimiento})
    const jugadorGuardado = await newJugador.save()
    
    res.json(jugadorGuardado);   
}

export const getJugador = async (req, res) => {
    const jugadoresTodos = await Jugador.find();

    res.json(jugadoresTodos);
}

export const getJugadorById = async (req, res) => {

}

export const updateJugadorById = async (req, res) => {
    const { id } = req.params;
    const {nombre, fechaNacimiento} = req.body;
    const jugadorActualizado = await Jugador.findByIdAndUpdate(id, {nombre, fechaNacimiento}, {
        new:true
    });

    res.json(jugadorActualizado);
}

export const deleteJugadorById = async (req, res) => {
    const { id } = req.params;
    const jugadorEliminado = await Jugador.findByIdAndDelete(id);

    res.json(jugadorEliminado);
}
