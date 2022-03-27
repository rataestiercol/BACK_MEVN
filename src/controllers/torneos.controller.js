import Torneo from '../models/Torneo'

export const createTorneo = async (req, res) => {  

}

export const getTorneos = async (req, res) => {
    const torneosTodos = await Torneo.find();

    res.json(torneosTodos);
}

export const getTorneoById = async (req, res) => {

}

export const updateTorneoById = async (req, res) => {

}

export const deleteTorneoById = async (req, res) => {

}
