const { Router } = require('express');
const router = Router();

const todo = require('./todo.router');
router.use('/todo', todo);

module.exports = router;