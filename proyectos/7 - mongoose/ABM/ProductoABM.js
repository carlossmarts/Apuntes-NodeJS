require('../connection');

const { findById } = require('../models/Producto');
const Producto = require('../models/Producto');

const altaProducto = async (clave, descripcion, precio)=>{
    const prod = new Producto({
        clave,
        descripcion,
        precio
    });
    let retorno = false;
    try{
        await prod.save();
        retorno = true;
    } catch (err){
        throw new Error (err);
    }
    return retorno;
}

const traerProducto = async (clave)=>{
    let retorno = await Producto.findOne({clave: clave});
    return retorno;
};

const traerProductos = async ()=>{
    let retorno = await Producto.find({});
    return retorno;
};


const bajaProducto = async (clave)=>{
    
};


// const modificarProducto = async(id, prod)=>{
//     let p = await Producto.findByIdAndUpdate(id,
//     {
//         clave: prod.clave,
//         descripcion: prod.descripcion,
//         precio: prod.precio
//     });
//     //return p; --> Retorna el elemento antes de ser modificado
//     return await Producto.findById(id);
// };

const modificarProducto = async(id, prod)=>{
    let p = await Producto.findById(id);
    p = prod;  //tambien puede hacerse para cada elemento del documento
    await p.save();
    return p;
};


module.exports = {
    traerProducto, //traer uno
    traerProductos, //Traer todos
    altaProducto,
    bajaProducto,
    modificarProducto
}    



