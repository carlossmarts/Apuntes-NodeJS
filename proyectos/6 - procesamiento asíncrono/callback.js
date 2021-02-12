

setTimeout(()=>{
    console.log('Hola mundo');
}, 3000);

function registrarTarea(req, res){
    personas.findById(req.idPersona, (err, persona)=>{
        if (err){
            res.send(err);
        } else{
            tareas.findById(persona.idTarea, (err,tarea)=>{
                if (err){
                    res.send(err);
                } else{
                    tarea.completado = true;
                    tarea.save((err)=>{
                        if(err){
                            res.send(err);
                        } else{
                            res.send('Tarea Completada');
                        }
                    })
                }
            })
        }
    })
}

