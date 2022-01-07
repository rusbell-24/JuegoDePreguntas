const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../config/db');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.rootPath = '/api'
    
        //Connect database
        this.connectDB();

        this.middleWares();

        //App Routes
        this.routes();

    }

    async connectDB() {
        try {
            await dbConnection.authenticate()
            console.log('Database connected');
        } catch (error) {
            throw new Error( error );
        }
    }

    middleWares() {
        //CORS
        this.app.use( cors() );   
        
        //Read and Parse of the body
        this.app.use( express.json() );
        
        //Public directory
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.rootPath, require('../routes/jugador') );
        this.app.use( this.rootPath, require('../routes/pregunta') );
        this.app.use( this.rootPath, require('../routes/respuesta') );
        this.app.use( this.rootPath, require('../routes/respuesta-correcta') );
    }

    listen() { 
        this.app.listen( this.port, () => {
            console.log(`Listening at PORT ${ this.port }`);
        });
    }
}

module.exports = Server;