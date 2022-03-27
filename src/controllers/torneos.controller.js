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
