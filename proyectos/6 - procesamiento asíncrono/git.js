//método callback
// const https = require ('https');

// let username = 'carlossmarts';

// let chromeUserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36";

// let options = {
//     host: 'api.github.com',
//     path: '/users/' + username,
//     method: 'GET',
//     headers: {'user-agent': chromeUserAgent}
// };

// const req = https.request(options, (res)=>{
//     let body = '';
//     res.on('data', (out)=>{
//         body += out;
//     });

//     res.on('end', (out)=>{
//         let json = JSON.parse(body);    //información de usuario de github
//         console.log(json.name);         //nombre del usuario
//     });
// });

// req.on('error', (err)=>{
//     console.log(err);
// })

// req.end();


//Método Promesas
// const fetch = require('node-fetch');
// let username = 'carlossmarts';
// let url = `https://api.github.com/users/${username}`;

// fetch(url)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((json)=>{
//         console.log(json.name);
//     });

//Método Async await
const fetch = require('node-fetch');

async function getNombre(username){
    let url = `https://api.github.com/users/${username}`;
    

    let res = await fetch(url);
    let json = await res.json();
    if(res.status != 200){
        throw Error('no existe usuario');
    }

    return json.name
}

(async function (){
    try{
        let nombre = await getNombre('carlossmarts');
        console.log(`Nombre del usuario de git: ${nombre}`);
    } catch (err){
        console.log(`Error: ${err}`);
    }
})();

