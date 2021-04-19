const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "register"
    },
    todo: {
        type: String,
        required: true 
    },
},{
    timestamps:true,
});

const todoData = mongoose.model('todoData', userSchema);

module.exports = todoData;