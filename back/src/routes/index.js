const {Router} = require('express');
const  getCharById = require('../controllers/getCharById');
const getCharDetail = require('../controllers/getCharDeatil');
let favs = require ("./utils/favs");

const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);

router.post("/rickandmorty/fav", (res, req)=>{
    favs.push(req.body);
    res.status(200).json({status: 'ok'});
});

router.get("/rickandmorty/fav", (res, req)=>{
    res.status(200).json(favs);
});

router.delete("/rickandmorty/fav/:id", (res, req)=>{
    const {id} = req.params;
    favs = favs.filter((char)=> char.id !== id);
    res.status(200).json({status: 'ok'});
});

module.exports = router;

//EXPRESS NO ME PIDE UNA EXTRUCTURA PREDERTEMINADA, HAY MUCHAS FORMAS Y HAY UNAS MAS ORDENADAS QUE OTRAS
