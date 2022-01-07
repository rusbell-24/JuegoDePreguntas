const { Router } = require('express');
const { getPreguntas } = require('../controller/pregunta');


const route = Router();


route.get('/preguntas', getPreguntas );

module.exports = route;