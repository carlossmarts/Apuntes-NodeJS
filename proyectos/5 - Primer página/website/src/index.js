//modulos
const express = require('express');
const path = require('path');
const morgan = require('morgan');

//inicializacion de express
const app = express();

//configuraciones
app.set('port', 3000);
app.set('view engine', 'pug');

//Middlewares
app.use(morgan('dev'));

//Rutas
app.use(require('./routes/index'));

//Archivos estáticos
app.use(express.static(path.join(__dirname,'public')));


//Servidor escuchando
app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'));
});




