const Task = require('../models/taskModel');
const User = require('../models/userModel');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, assignedTo, dueDate } = req.body;
        const newTask = new Task({ title, description, assignedTo, dueDate });
        await newTask.save();
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error: error.message });
    }
};

// Get tasks assigned to a user
exports.getTasksByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const tasks = await Task.find({ assignedTo: userId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    }
};

// Update task status
exports.updateTaskStatus = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const { status } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(taskId, { status }, { new: true });
        res.status(200).json({ message: 'Task status updated', task: updatedTask });
    } catch (error) {
        res.status(500).json({ message: 'Error updating task status', error: error.message });
    }
};

// Assign task to a user
exports.assignTask = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const { assignedTo } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(taskId, { assignedTo }, { new: true });
        res.status(200).json({ message: 'Task assigned successfully', task: updatedTask });
    } catch (error) {
        res.status(500).json({ message: 'Error assigning task', error: error.message });
    }
};