
const fs = require('fs');

fs.writeFile('./texto.txt', 'hola mundo en archivo', (err) =>{
    if (err){
        console.log('error al abrir escribir archivo')
    } else{
        console.log('escritura realizada')
    }
})

fs.readFile('texto.txt', (err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})

