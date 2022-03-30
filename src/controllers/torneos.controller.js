import Torneo from '../models/Torneo'

export const createTorneo = async (req, res) => { 
    const {nombre, lugar, fecha, numCampos} = req.body;

    const newTorneo = new Torneo({nombre, lugar, fecha, numCampos})
    const TorneoGuardado = await newTorneo.save()

    res.json(TorneoGuardado); 
}

export const getTorneos = async (req, res) => {
    const torneosTodos = await Torneo.find();

    res.json(torneosTodos);
}

export const getTorneoById = async (req, res) => {
    const { id } = req.params;
    const torneo = await Torneo.findById(id);

    res.json(torneo);
}

export const updateTorneoById = async (req, res) => {
    const { id } = req.params;
    const {nombre, lugar, fecha, numCampos} = req.body;
    const torneoActualizado = await Torneo.findByIdAndUpdate(id, {nombre, lugar, fecha, numCampos}, {
        new:true
    });

    res.json(torneoActualizado);
}

export const deleteTorneoById = async (req, res) => {
    const { id } = req.params;
    const torneoEliminado = await Torneo.findByIdAndDelete(id);

    res.json(torneoEliminado);
}

export const guardarPartido = async (req, res) => {
    const { id } = req.params;
    const {idEquipoA, idEquipoB, hora, campo} = req.body;


    console.log(idEquipoA, idEquipoB, hora, campo)

    const partidoGuardado = await Torneo.findByIdAndUpdate (
        {_id: id},
        {$push: {
            'partido': {
                equipoA: idEquipoA, 
                equipoB: idEquipoB,
                campoJuego: campo,
                hora: hora
            }
        }
    });

    res.json(partidoGuardado);
}

export const consultarPartidos = async (req, res) => {
    const { id } = req.params;

    const partidos = await Torneo.findById(id)
        .populate('partido.equipoA')
        .populate('partido.equipoB');

    const partidosTorneo = [];

    partidos.partido.forEach(partido => {
        partidosTorneo.push({
            'idPartido': partido.id,
            'equipoA': partido.equipoA.nombre,
            'equipoB': partido.equipoB.nombre,
            'campo': partido.campoJuego,
            'hora': partido.hora
        });
    });
    res.json(partidosTorneo);
}

export const getPartidoById = async (req, res) => {
console.log("ok");
}
