const router = require('express').Router();
const Todo = require('../models/todo');





//routes will be here
router.get('/', async(req, res) => {
    const todos = await Todo.find();
    res.render('index', { todo: todos });
    });
//export 
module.exports = router;

