var http = require('http');

var porta = 8080;

http.createServer(function(req,res){
    res.end("<h1>Ola</h1>");
}).listen(porta);

console.log('O servidor está On-Line na porta '+porta);