
function dividir(num1, num2){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if(num2 != 0){
                res(num1/num2);
            } else {
                rej('Error, no se puede dividir por 0');
            }
        }, 3000)
    })
}

dividir(4,2)
    .then((resultado)=>{
        console.log(resultado);
    })
    .catch((err)=>{
        console.log(err);
    })

console.log('Esperando 3 Seg');


//consulta

function registrarTarea(req, res){
    personas.findById(req.idPersona)
        .then((persona)=>{
            return tareas.findById(persona.idTarea);
        })
        .then((tarea)=>{
            tarea.completado = true;
            return tarea.save();
        })
        .then(()=>{
            res.send('tarea completada');
        })
        .catch((error)=>{
            res.send(error);
        })
}

