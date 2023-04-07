const axios = require("axios");
const {KEY, URL} = process.env; //se saca la URL y la KEY de las variables de entorno archivo .env

const getCharById = async (req, res) => {
    const {id} = req.params;

    axios.get(`${URL}/character/${id}?key=${KEY}`)
    .then(response => {
        const {id, name, species, image, gender} = response.data;
        res.status(200).json({id, name, species, image, gender});

    }) .catch(error => {
        res.status(500).json({error: error.message});
    })


};


/*const getCharById = (id, res) => {
    const {id} = req.params; // se saca el ID de PARAMS

    axios.get(`${URL}/character/${id}?key=${KEY}`) //SUCCESSHANDLER
    .then(response =>{
       const {id, name, species, image, gender} = response.data;
       res.writeHead(200, {'Content-Type': 'application/json'});
       res.end(JSON.stringify({id, name, species, image, gender})) 

    }) 
    .catch((error)=> { //ERRORHANDLER
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end(error.message)
    })
}*/
// 'res' es el objeto que representa la respuesta del servidor
module.exports = getCharById;