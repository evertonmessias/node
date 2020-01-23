/* 
SISTEMA MONGOOSE, Instalações:
npm install --save mongoose
*/

//Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/teste")
//mongoose.connect("mongodb+srv://root:efc2505xx@cluster0-qjwu2.gcp.mongodb.net/test?retryWrites=true&w=majority")
    .then(() => {
        console.log("OK");
    })
    .catch(() => {
        console.log("ERRO");
    });

//Model
const usuario = mongoose.Schema({
    nome: { type: String, require: true },
    telefone: { type: String, require: true }
});

//Collection
mongoose.model('usuario', usuario);

//Inserir
const novoUsuario = mongoose.model('usuario');
new novoUsuario({
    nome: "Everton",
    telefone: "787878787"
}).save().then(() => {
    console.log("Usuario criado com sucesso");
}).catch((err) => {
    console.log("Erro ao criar usuario;" + err);
});

/*
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
})//cadastro.sync({force: true}); // aqui cria a tabela

//Body-Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ******** Rotas ********
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
        nome: req.body.nome, telefone: req.body.telefone,
        createdAt: '01/01/2020', updatedAt: '01/01/2020'
    }).then(function () {
        res.redirect("/consulta");
    }).catch(function () {
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
*/