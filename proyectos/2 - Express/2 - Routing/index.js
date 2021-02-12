
const express = require('express');

const app = express();

app.use(express.json());

app.post('/user/:id', (req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('<h3> Peticion POST recibida </h3>');  
});

app.all('/user', (req, res, next)=>{
    //res.send('respuesta con método ALL');
    console.log('respuesta ALL');
    next();

});

app.get('/user', (req, res)=>{
    res.send('respuesta con método GET');
});
/* 
app.get('/', (req, res)=>{
    res.send('<h3>Hola mundo</h3>');
})

app.post('/post', (req, res)=>{
    res.send('<h3> Peticion POST recibida </h3>');
});

app.put('/put', (req, res)=>{
    res.send('<h3> Peticion PUT recibida </h3>');
});

app.delete('/delete', (req, res)=>{
    res.send('<h3> Peticion DELETE recibida </h3>');
});

app.get('/user', (req, res)=>{
    res.json({
        nombre:'Carlos',
        apellido: 'Martinez'
    });
});
 */


/* app.get('/informacion', (req, res)=>{
    res.send('<h3> Esta es una página hecha con express </h3>')
});

app.get('/test', (req, res)=>{
    res.send('<h1> TEST </h1>');
}); */

app.listen(3000, ()=>{
    console.log('server on port 3000');
});

    
