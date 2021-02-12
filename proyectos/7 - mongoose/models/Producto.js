const {Schema, model} = require('mongoose');

const ProductoSchema = new Schema({
    clave: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: String,
    precio: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0) {
                throw new Error('El precio debe ser mayor o igual a cero');
            }
        }
    }
})



module.exports = model('Producto', ProductoSchema);




