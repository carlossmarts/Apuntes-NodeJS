
const express = require('express');

const app = express();

//Settings
app.set('appName', 'Tutorial Express');
app.set('port', 3000);
// app.set('view engine', 'ejs');

//app.set('view engine', 'hbs');

app.set('view engine', 'pug');
//Users
let users = [
    {
        id: 1,
        name: 'Carlos'
    }, 
    {
        id: 2,
        name:'Sebastian'
    }, 
    {
        id: 3,
        name: 'Martinez'
    }
    ];


//Middelwares

//Routes
app.get('/', (req, res)=>{
    res.render('index.ejs');
});

/* app.get('/users', (req, res)=>{
    
    res.render('users.ejs', 
    {
        users: users
    });
});

app.get('/users', (req, res)=>{
    
    res.render('users.hbs', 
    {
        users: users, 
        titulo: "ejemplo con pug", 
        mensaje:"usuarios | Handlebars"
    });
}); */

app.get('/users', (req, res)=>{
    
    res.render('users.pug', 
    {
        users: users, 
        titulo: "ejemplo con pug", 
        mensaje:"usuarios | PUG"
    });
});


app.listen(app.get('port'), ()=>{
    console.log(app.get('appName'));
    console.log(`server on port ${app.get('port')}`);
});

