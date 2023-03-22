const http = require('http');
const data =  require ("./utils/data.js");

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req;
    
    if(url.includes("rickandmorty/characters/")){
        const id = Number(url.split("/").at(-1));
        const character = data.find((character) => character.id === parseInt(id));

        if(character){
            res.writeHead(200, {"Content-Type": "application/json"});
            return res.end(JSON.stringify(character));
        } else {
            res.writerHead(404, {"Content-Type": "application/json"});
            return res.end(JSON.stringify({error: "Character not found"}));
        }
        res.end();
    }
}).listen(3001, "localhost");