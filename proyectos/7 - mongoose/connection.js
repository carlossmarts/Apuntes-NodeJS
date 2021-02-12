const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/negocio'

const db = mongoose.connection;

mongoose.connect( uri,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}
).catch(err => console.log(err));

db.on('open', ()=> console.log(`BD conectada en ${uri}`));


