const axios = require("axios");
const {KEY, URL} = process.env;


const getCharById = (res, id) => {
    axios.get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
        const {id, image, name, gender, species} = response.data;
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end (JSON.stringify({ id, name, gender, species, image }));
    })
    .catch((error) => {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end(error.message);
    });
};

module.exports = getCharById;