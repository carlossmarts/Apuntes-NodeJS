

function sumar(x1, x2){
    return x1 + x2
}

// function restar(x1, x2){
//     return x1 - x2
// }

// function multiplicar(x1, x2){
//     return x1 * x2
// }

// function dividir(x1, x2){
//     if( x2 == 0 ){
//         console.log("no se puede dividir por 0")
//     } else{
//         return x1 + x2
//     }
// }

// exports.sumar = sumar;

// exports.restar = function (x1, x2){
//     return x1 - x2
// }

// exports.multiplicar = (x1, x2) => x1*x2;

module.exports = {
    sumar: sumar,

    restar : function(x1, x2){
        return x1 - x2
    },

    multiplicar: (x1, x2)=> x1*x2,

    dividir : (x1, x2) =>{
        if( x2 == 0 ){
            console.log("no se puede dividir por 0")
        } else{
            return x1 / x2
        }
    }
}


