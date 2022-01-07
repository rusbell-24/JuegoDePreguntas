const Jugador = require("../models/jugador");

const getJugador = async ( req, res = response) => {
    const { offset = 0, limit = 100 } = req.query;
    const query = {
        offset: Number( offset ),
        limit: Number( limit )
    }
   
        try {
            const { count, rows } = await Jugador.findAndCountAll( query );
            console.log("PLAYER ", rows)
            
            res.status( 200 ).json({
                status: 200,
                msg: 'OK',
                totalItems: count,
                data: rows
            });   
            
        } catch (error) {
            res.status( 500 ).json({
                status: 500,
                msg: `Internal server error`,
                data: []
            });
            console.log( error );
        }   
}

module.exports = {
    getJugador
}
