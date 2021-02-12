const express = require('express');
const taskController = require('../controllers/taskControllers');
const router = express.Router(); 

//traer
router.get('/', taskController.getTasks);

//alta
router.get('/add', taskController.addForm);
router.post('/create', taskController.createTask);

//baja
router.get('/delete/:id', taskController.deleteTask);

//modificacion
router.get('/update/:id', taskController.updateForm);
router.post('/update', taskController.updateTask);

//hecho
router.get('/done/:id', taskController.done);

module.exports = router;