const express = require('express');
const cors = require('cors');

const dbConnection = require('../db/config');


class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;

        this.paths = {
            reports: '/api/reports'
        }


        // Conectar base de datos
        this.connectDB();
        //Cargar middlewares
        this.middlewares();
        // Cargar rutas de mi api
        this.routes();
    }

    async connectDB() {
        try {
            
            await dbConnection.authenticate();
            console.log('Database online');

        } catch (error) {
            throw new Error(error);
        }
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes() {
        this.app.use( this.paths.reports, require('../routes/reports'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running in port ', this.port);
        });
    }
}


module.exports = Server;

