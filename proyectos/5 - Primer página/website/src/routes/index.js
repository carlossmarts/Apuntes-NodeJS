//modulos
const express = require('express');
const path = require('path');

//inicializacion
const router = express();

//config
router.set('views', path.join(__dirname, '/../views'));

//rutas
router.get('/', (req, res)=>{
    res.render('index', {titulo: 'la huerta de la Irma'});
});

router.get('/contact', (req, res)=>{
    res.render('contact', {titulo: 'contact', mensaje:'Contactanos'});
});

module.exports = router

