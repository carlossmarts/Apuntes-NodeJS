const Task = require('../model/Task'); //modelo

//Traer
const getTasks = async (req, res)=>{
    const tasks = await Task.find();       //trae todas las tareas
    res.render('index', {tasks});
}

//alta
const addForm = async(req, res)=>{
   res.render('addForm', )
}

const createTask = async (req, res)=>{
    const newTask = new Task(req.body);
    await newTask.save();
    res.redirect('/');
}

//baja
const deleteTask = async (req, res)=>{
    let { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect('/');
}

//modificacion
const updateForm = async (req, res)=>{
    let { id } = req.params;
    let task = await Task.findById(id);
    res.render('updForm', {task});
}
const updateTask = async (req, res)=>{
    let id = req.body._id;
    const updTask = await Task.findByIdAndUpdate(id, req.body);
    res.redirect('/');
}

const done = async (req, res)=>{
    let { id } = req.params;
    const task = await Task.findById(id);
    console.log(task);
    task.done = !task.done;         //cambio de estado
    await task.save();
    res.redirect('/');
}
module.exports = {
    getTasks,
    createTask,
    addForm,
    deleteTask,
    updateForm,
    updateTask,
    done
}