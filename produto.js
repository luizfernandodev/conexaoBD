const Sequelize = require('sequelize');

const database = require('./bd');

const Produto = database.define('produto',
    {
        Id:
        {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        Nome:
        {
            type: Sequelize.STRING,
            allowNull: false
        },

        DataCriacao:
        {
            type: Sequelize.DATE,
            allowNull: false
        }
    }
);  

module.exports = Produto;