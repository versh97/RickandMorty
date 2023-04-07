const axios = require('axios');
const {KEY, URL} = process.env;

const getCharacterDetail = async (req, res) => {
    try {
      const {} = req.params;
  
      const response = await axios.get(`${URL}/character/${id}?key=${KEY}`);
  
      const { id, name, species, image, gender, origin } = response.data;
  
      res.status(200).json({ id, name, species, image, gender, origin });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }


  };

  app.get('/characters/:id', getCharacterDetail);

//VARIABLES DE ENTORNO
//Son variables que se definen en el sistema operativo son privadas
//y no se pueden ver desde el código
//se configuran fuera del código
// ARCHIVO .ENV


/*const succesH = (response, res) => {
    const{name, gender, status, origin, species, image} = response.data;
res.writeHead(200, {'Content-Type': 'application/json'});
res.end (JSON.stringify(name, gender, status, origin, species, image));
};
const errorH = (error, res) => {
res.writeHead(500, {'Content-Type': 'text/plain'});
res.end(error.message);
};
const getCharDetail = async (id, res) => {
    axios.get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
        succesH(response, res);
    })
    .catch((error) => {
        errorH(error, res);
    });
    
}*/

module.exports = { getCharacterDetail};