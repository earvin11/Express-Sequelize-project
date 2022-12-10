const { Sequelize } = require('sequelize');

const dbConnection = new Sequelize('nombre-database', 'nombre-de-usuario-de-DB', 'password', {
    host: '', // URL de base de datos
    dialect: 'oracledb', // tipo de base de datos
    // logging: false
});

export default dbConnection;