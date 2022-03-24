import Equipo from '../models/Equipo'

export const createEquipo = async (req, res) => {
    const {nombre, logoUrl, emailContacto} = req.body;

    console.log(req.body);
    console.log({nombre, logoUrl, emailContacto});

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
