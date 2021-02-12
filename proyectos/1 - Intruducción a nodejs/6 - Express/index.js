/*
const http = require('http')
const colors = require('colors');


const port = 3000

const handleServer = (req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1> Hola mundo desde nodejs </h1>');
    res.end;
}

const server = http.createServer(handleServer);

const listenCallback = ()=> console.log (`Servidor a la escucha en puerto ${port}`.green);

server.listen(port, listenCallback);
*/

const express = require('express');

const server = express();
const port = 3000;
server.get("/", (req, res)=> {
    res.send('<h1> Hola mundo con express y nodejs </h1>');
    res.end(); 
});
server.listen (port, ()=> console.log(`servidor a la escucha en puerto ${port}`));


