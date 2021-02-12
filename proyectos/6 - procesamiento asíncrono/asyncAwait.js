
// async function hacerAlgo(
//     const respuesta = await LlamadaAsincrona();
// )

async function registrarTarea(req, res){
    try{
        const persona = await personas.findById(req.idPersona);
        const tarea = await tareas.findById(persona.idTarea);
        tarea.completa = true;
        res.send('Tarea completada');
    }
    catch (e){
        res.send(e);
    }
}



