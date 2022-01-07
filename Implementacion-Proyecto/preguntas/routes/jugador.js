const { Router } = require('express');
const { getJugador } = require('../controller/jugador');

const route = Router();

route.get('/jugador', getJugador);


module.exports = route;