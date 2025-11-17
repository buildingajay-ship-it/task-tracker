const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['junior', 'senior', 'leader'],
        required: true
    },
    tasksAssigned: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    tasksRequested: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;