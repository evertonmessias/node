const Sequelize = require("sequelize");
const sequelize = new Sequelize('teste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {console.log("SUCESSO")})
        .catch(() => {console.log("ERRO")});

const cadastro = sequelize.define('cadastro',{
    nome:{type: Sequelize.STRING},
    telefone:{type: Sequelize.STRING}
})

//cadastro.sync({force: true}); // aqui cria a tabela

cadastro.create({
    nome: 'Everton',telefone: '995947383',
    createdAt: '12/01/2020', updatedAt: '12/01/2020'
})