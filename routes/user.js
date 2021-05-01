const router = require('express').Router();
const todoData = require('../models/register');


router.route('/get').get((req,res) => {
    todoData.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id?').get((req,res) => {
    const id = req.params;
    console.log(id.id);
    todoData.findOne({_id: id.id}, (err, user)=>{
        if(err) {
            res.json(err)
            return;
        }

        let userData = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username 
        }

        res.json(userData)

    });
    // .then(data => res.json(data))
    // .catch(err => res.status(400).json('Error: ' + err));
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