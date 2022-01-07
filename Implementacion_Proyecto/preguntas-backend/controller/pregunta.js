const { response } = require('express');
const Pregunta = require('../models/pregunta');

const getPreguntas = async ( req, res = response ) => {
    const { id } = req.query;

    try {
        const preguntas = await Pregunta.findAll( { where: { Nivel: id } }  );
      
        res.status( 200 ).json({
            preguntas
        });
        
    } catch (error) {
        res.status( 500 ).json({
            msg: 'Internal server error'
        });
        console.log( error );
    }
}

module.exports = {
    getPreguntas
}