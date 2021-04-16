const router = require('express').Router();
const todoData = require('../models/user');


router.route('/get').get((req,res) => {
    todoData.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/post', (req, res) => {
    const todo = req.body.todo;
 
    const newTodoData = new todoData({
        todo
    });

    newTodoData.save()
    .then(()=> res.json('Data Saved'))
    .catch(err => res.status(400).json('Reg Error' + err));

});


module.exports = router;