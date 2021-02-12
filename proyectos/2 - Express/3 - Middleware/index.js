const express = require('express');
//const fs = require('fs');

const morgan = require('morgan');

const app = express();


/* function logger(req, res, next){
    let fecha = new Date();
    fs.appendFile('./log', `\n${fecha} - ${fecha.getTime()} - peticion recibida:`, (err)=>{
        if (err) console.log('error al escribir archivo');
    });
    fs.appendFile('./log', ` ${req.protocol}://${req.get('host')}${req.originalUrl}`, (err)=>{
        if (err) console.log('error al escribir archivo');
    });
    next();
} */

//app.use(logger);

// app.use(morgan('dev'));

app.get('/user/:nombre', (req, res)=>{
    res.send(`Bienvenido usuario ${req.params.nombre}`);
});

app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('Server on port 3000');
})