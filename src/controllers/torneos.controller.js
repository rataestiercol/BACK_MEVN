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

    const result = await Torneo.findByIdAndUpdate (
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

    res.json({nombre: "algo"});
}

export const consultarPartidos = async (req, res) => {
    const { id } = req.params;


    // const datosJugadorYEquipos = await Jugador
    //     .findOne({_id: id })
    //     .populate("equipos.equipo");

    Torneo.findOne({ id: id })
        .populate('partido.equipoA')
        .exec(function (err, story) {
            if (err) return handleError(err);
            console.log(story.partido[0].equipoA.nombre);
            console.log(story)
        });

        // const datosJugadorYEquipos = await Torneo
        //     .findOne({ id: id })
        //     .populate('partido.equipoA')
        //     .populate('partido.equipoB');

        // console.log(datosJugadorYEquipos.partido[0].equipoA.nombre)
        // console.log(datosJugadorYEquipos.partido[0].equipoB.nombre)

    res.json({a: "u"});
}
