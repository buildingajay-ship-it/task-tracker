// src/js/tasks.js

const tasks = [];

// Function to create a new task
function createTask(title, description, assignedTo) {
    const task = {
        id: tasks.length + 1,
        title,
        description,
        assignedTo,
        status: 'Pending',
        createdAt: new Date(),
    };
    tasks.push(task);
    return task;
}

// Function to assign a task to a user
function assignTask(taskId, userId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.assignedTo = userId;
        return task;
    }
    return null;
}

// Function to get tasks assigned to a specific user
function getTasksByUser(userId) {
    return tasks.filter(task => task.assignedTo === userId);
}

// Function to update task status
function updateTaskStatus(taskId, status) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.status = status;
        return task;
    }
    return null;
}

// Function to request task completion status
function requestTaskStatus(taskId) {
    const task = tasks.find(t => t.id === taskId);
    return task ? task.status : null;
}

// Exporting functions for use in other modules
export { createTask, assignTask, getTasksByUser, updateTaskStatus, requestTaskStatus };