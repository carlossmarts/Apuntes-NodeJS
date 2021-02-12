const { Schema, model} = require('mongoose');

const ClienteSchema = new Schema({
    nombre: String,
    activo: Boolean,
    CUIT: String,
    fechaAlta: Date
});

module.exports = model('Cliente', ClienteSchema);

