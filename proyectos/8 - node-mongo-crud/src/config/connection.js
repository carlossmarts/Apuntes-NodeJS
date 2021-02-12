const mongoose = require('mongoose');

//DB connection
const uri = 'mongodb://localhost/agenda';
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

module.exports = mongoose;