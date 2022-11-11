const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbProduto', 'root', '101218',
{
    dialect: 'mysql',
    host: 'localhost',
    port: '3307'
});

module.exports = componenteSequelize;