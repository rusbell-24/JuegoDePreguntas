const { Router } = require('express');
const { getRespuestaCorrecta } = require('../controller/respuesta-correcta');


const route = Router();


route.get('/respuesta-correcta', getRespuestaCorrecta );

module.exports = route;