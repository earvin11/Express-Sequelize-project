const { Sequelize } = require('sequelize');

const dbConnection = new Sequelize('nombre-database', 'nombre-de-usuario-de-DB', 'password', {
    host: '', // URL de base de datos
    dialect: 'oracle', // tipo de base de datos
    // logging: false
});

module.exports = {

    dbConnection

};