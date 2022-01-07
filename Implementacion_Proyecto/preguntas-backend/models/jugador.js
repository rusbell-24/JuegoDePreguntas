const { DataTypes } = require('sequelize');
const { dbConnection } = require('../config/db');

const Jugador = dbConnection.define('jugador', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING,
        allownNull: false
    },
    Puntaje: {
        type: DataTypes.INTEGER,
        allownNull: false
    },
    Nivel: {
        type: DataTypes.INTEGER,
        allownNull: false
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});

module.exports = Jugador;