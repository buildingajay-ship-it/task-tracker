const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Route to create a new task
router.post('/tasks', taskController.createTask);

// Route to assign a task to a user
router.post('/tasks/assign', taskController.assignTask);

// Route to get all tasks for a specific user
router.get('/tasks/:userId', taskController.getUserTasks);

// Route to request task completion status
router.post('/tasks/status', taskController.requestTaskStatus);

// Route to get all tasks
router.get('/tasks', taskController.getAllTasks);

module.exports = router;