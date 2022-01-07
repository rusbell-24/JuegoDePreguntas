const { Router } = require('express');
const { getRespuestas } = require('../controller/respuesta');


const route = Router();


route.get('/respuestas', getRespuestas );

module.exports = route;