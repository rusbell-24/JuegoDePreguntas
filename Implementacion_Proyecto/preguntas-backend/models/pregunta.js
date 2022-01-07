const { DataTypes } = require('sequelize');
const { dbConnection } = require('../config/db');
const Respuesta = require('./respuesta');

const Pregunta = dbConnection.define('pregunta', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Nivel: {
        type: DataTypes.INTEGER,
        allownNull: false
    },
    Pregunta: {
        type: DataTypes.STRING,
        allownNull: false
    },
    Fk_Respuesta: {
        type: DataTypes.INTEGER,
        allownNull: false
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
});


Respuesta.hasOne( Pregunta, { foreignKey: 'Fk_Respuesta'} );
Pregunta.belongsTo( Respuesta, { foreignKey: 'Fk_Respuesta' } );

module.exports = Pregunta;