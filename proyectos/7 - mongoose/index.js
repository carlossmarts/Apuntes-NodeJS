require('./connection');

const Cliente = require('./models/Cliente');


const cliente1 = new Cliente({
    nombre: 'Carlos Martinez',
    activo: true,
    CUIT: '20-36161871-9',
    fechaAlta: new Date()
});

cliente1.save((err, doc)=>{
    if (err) console.log(err);
    console.log(doc);
})


