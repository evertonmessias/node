/* 
SISTEMA, Instalações:
npm install nodemon -g  //monitor
npm install --save express   //framework
npm install --save sequelize    //acesso ao BD
npm install --save mysql2   //BD
npm install --save express-handlebars   //templates
npm install -D handlebars@4.5.3
npm install --save body-parser  //envio ao BD
*/

//Express
const express = require("express");
const app = express();

//Template Handlebars
const handlebars = require("express-handlebars");
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Banco de Dados
const Sequelize = require("sequelize");
const sequelize = new Sequelize('teste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate()
    .then(() => { console.log("SUCESSO") })
    .catch(() => { console.log("ERRO") });

const cadastro = sequelize.define('cadastro', {
        nome: { type: Sequelize.STRING },
        telefone: { type: Sequelize.STRING }
    }) //cadastro.sync({force: true}); // aqui cria a tabela

//Body-Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ******** Rotas ******** 

app.use(express.static('./public')); //para css e jquery

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/form", (req, res) => {
    res.render("form");
})

app.get("/consulta", (req, res) => {
    cadastro.findAll().then((tudo) => {
        res.render("consulta", { tudo: tudo });
    })
})

app.post("/inserir", (req, res) => {
    cadastro.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        createdAt: '01/01/2020',
        updatedAt: '01/01/2020'
    }).then(function() {
        res.redirect("/consulta");
    }).catch(function() {
        res.send("Erro no Formulário!" + erro);
    })
})


app.get("/apagar", (req, res) => {
    cadastro.findAll().then((tudo) => {
        res.render("apagar", { tudo: tudo });
    })
})

app.get("/deletar/:id", (req, res) => {
    cadastro.destroy({ where: { 'id': req.params.id } }).then(() => {
        res.redirect("/consulta");
    }).catch(() => {
        res.send("Erro ao apagar")
    })
})

// Servidor
app.listen(8082, () => {
    console.log("Servidor rodando na porta 8082");
});