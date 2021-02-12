
const http = require('http')

const port = 3000

const handleServer = (req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1> Hola mundo desde nodejs </h1>');
    res.end;
}

const server = http.createServer(handleServer);

const listenCallback = ()=> console.log (`Servidor a la escucha en puerto ${port}`);

server.listen(port, listenCallback);

