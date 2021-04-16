const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    todo: {
        type: String,
        required: true 
    },
},{
    timestamps:true,
});

const todoData = mongoose.model('todoData', userSchema);

module.exports = todoData;