const Sequelize = require('sequelize');

const dbConnection = new Sequelize('preguntas', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        schema: 'public',
        freezeTableName: true
    }
    //logging: false
});

module.exports = {
    dbConnection
}