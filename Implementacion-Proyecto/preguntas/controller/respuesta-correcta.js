const { response } = require('express');
const Pregunta = require('../models/pregunta');
const Respuesta = require('../models/respuesta');

const getRespuestaCorrecta = async ( req, res = response ) => {
    const { id } = req.query;

    try {
        const respuestaCorrecta = await Pregunta.findOne( { where: { Id: id }, include: [{ model: Respuesta }] }  );
      
        res.status( 200 ).json({
            respuestaCorrecta
        });
        
    } catch (error) {
        res.status( 500 ).json({
            msg: 'Internal server error'
        });
        console.log( error );
    }
}

module.exports = {
    getRespuestaCorrecta
}