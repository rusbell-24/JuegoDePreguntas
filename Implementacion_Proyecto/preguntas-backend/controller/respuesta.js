const { response } = require('express');
const Respuesta = require('../models/respuesta');

const getRespuestas = async ( req, res = response ) => {
    const { id } = req.query;

    try {
        const respuestas = await Respuesta.findAll( { where: { Pk_pregunta: id } }  );
      
        res.status( 200 ).json({
            respuestas
        });
        
    } catch (error) {
        res.status( 500 ).json({
            msg: 'Internal server error'
        });
        console.log( error );
    }
}

module.exports = {
    getRespuestas
}