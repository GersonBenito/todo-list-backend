const { Router } = require('express');
const todo = require('../controllers/todo.controller');

const router = Router();

router.post('/', todo.addTodo);
router.get('/', todo.getTodos);
router.put('/:id', todo.updateTodo);
router.delete('/:id', todo.deleteTodo);


module.exports = router;