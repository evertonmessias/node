/* 
Instalacao do Sequelize:
npm install --save sequelize
npm install --save mysql2
*/

const Sequelize = require("sequelize");
const sequelize = new Sequelize('teste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {console.log("SUCESSO")})
        .catch(() => {console.log("ERRO")});