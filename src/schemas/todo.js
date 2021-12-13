const { Schema, model } = require('mongoose');

const TodoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = model('Todo', TodoSchema);

