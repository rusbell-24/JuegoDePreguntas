const { DataTypes } = require('sequelize');
const { dbConnection } = require('../config/db');

const Respuesta = dbConnection.define('respuesta', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Respuesta: {
        type: DataTypes.STRING,
        allownNull: false
    },
    Pk_pregunta: {
        type: DataTypes.INTEGER,
        allownNull: false
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});

module.exports = Respuesta;