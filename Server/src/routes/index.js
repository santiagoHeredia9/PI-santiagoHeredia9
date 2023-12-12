
const express = require('express');
const router = express.Router();
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

// Definir las rutas para cada controlador
router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

// Exportar el router
module.exports = router;