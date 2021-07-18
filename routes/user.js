const router = require('express').Router();
const todoData = require('../models/register');
const activityModel = require('../models/user')


router.route('/get').get((req,res) => {
    todoData.find()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id?').get((req,res) => {
    const id = req.params;
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
});




router.route('/postActivity').post((req, res) => {
    const title  = req.body.title;
    const body  = req.body.body;



    const newActivityModel = new activityModel({
       title,
       body
    })


    newActivityModel.save()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
    //   exerciseModel.updateOne(
    //     { _id: activityData.userId },
    //     { $push: { exercise: activityData } },
    //   ).then(()=>{
    //     exerciseModel.findOne({ _id: exerciseForm.userId },(err, data)=>{
    //       if(err) res.json(err)
    
    //       let bindData = data.exercise[data.exercise.length - 1];
    
    //       let bindDataToObject = {
    //         username:data.username,
    //         description: bindData.description,
    //         duration: bindData.duration,
    //         _id: data._id,
    //         date: bindData.date
    //       }
          
    //       res.json(bindDataToObject);
    //     })
    //   })
    

});


module.exports = router;