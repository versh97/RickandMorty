require('dotenv').config();
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3001;
const router = require('./routes');
const morgan = require('morgan')
const cors = require('cors');

server.use('/', router);

server.use(express.json());
server.use(morgan('dev'));
server.use(cors()); //CORS ES UN MIDDLEWARE QUE PERMITE QUE EL FRONT Y EL BACK SE COMUNIQUEN 

server.listen(PORT, ()=>{
    console.log(`Listening in port ${PORT}`)
})

server.use(router);

/* const http = require('http');
 const getCharById = require('./controllers/getCharById');
const { getCharDetail } = require('./controllers/getCharDetail');


 http.createServer((req, res) => {
   res.setHeader('Access-Control-Allow-Origin', '*');

   const {url} = req;

   if(url.includes('onsearch')){
     const id = url.split('/').at(-1);
        getCharById(id, res);
   }

    if(url.includes('detail')){
        const id = url.split('/').at(-1);
        getCharDetail(id, res);
    }

}).listen(3001, 'localhost');*/