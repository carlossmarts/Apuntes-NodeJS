const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('./config/connection');

const app = express();


//Routes imports
const indexRoutes = require('./routes/index');


//settings
app.set('port', process.env.PORT || 3000); //Puerto asignado por el host, sino localhost 3000
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//static files
app.use(express.static(path.join(__dirname, 'public')));


//Middlewares
app.use(morgan('dev')); //Mostrar peticiones por consola
app.use(express.urlencoded({extended: false})); // permite entender los datos en formato json que envia el cliente

//routes
app.use('/', indexRoutes);

//server start
app.listen(app.get('port'), ()=>{
    console.log (`Server on port ${app.get('port')}`)
})