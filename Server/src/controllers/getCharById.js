const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`)

        if(!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`);

        const character = {
            id: data.id,
            name: data.name,
                    gender: data.gender,
                    origin: data.origin,
                    image: data.image,
                    status: data.status,
                    species: data.species
        }
        return res.status(200).json(character)
    }
    catch (error){
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.message)
    }
    
};

module.exports = {
    getCharById,
};