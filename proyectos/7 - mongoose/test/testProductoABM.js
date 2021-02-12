const prodABM = require('../ABM/ProductoABM');

/*                    ALTAS                     */

// prodABM.altaProducto('AG1', 'Alfajor guaymallen', 30)
//     .then( ret => ret? console.log('producto guardado'): console.log('error'))
//     .catch( err => console.log(err));

// prodABM.altaProducto('AJ1', 'Alfajor jorgelin', 40)
//     .then( ret => ret? console.log('producto guardado'): console.log('error'))
//     .catch( err => console.log(err));

// prodABM.altaProducto('AG2', 'Alfajor guaymallen de fruta', 300)
//     .then( ret => ret? console.log('producto guardado'): console.log('error'))
//     .catch( err => console.log(err));

/*                CONSULTAS                 */

// (async function(){
//     let prod =  await prodABM.traerProducto('AG1');
//     console.log(prod);
// })()


// (async function(){
//     let prod =  await prodABM.traerProductos();
//     console.log(prod);
// })()


/*               MODIFICACION                         */
(async function(){
    let prod = await prodABM.traerProducto('AG1');
    prod.descripcion = 'alfajor guaymallen';
    let p = await prodABM.modificarProducto(prod._id, prod);
    console.log(p);
})()