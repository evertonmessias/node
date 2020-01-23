/* 
Instalacao do Express:
npm install express --save

Instalacao do Nodemon:
npm install nodemon -g
*/

var express = require("express");

var app = express();

//Rotas

app.get("/",(req, res)=>{
    res.send("Bem vindo ao App");
})

app.get("/site",(req,res)=>{
    res.sendFile(__dirname+"/html/index.html");
})

app.get("/:nome", (req,res)=>{
    res.send(`<h1>Ola ${req.params.nome}</h1>`);
})

app.listen(8081, ()=>{
    console.log("Servidor rodando na porta 8081");
});