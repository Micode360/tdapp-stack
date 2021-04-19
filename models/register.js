const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema ({
    firstName: {
        type: String,
        required: true 
    },
    lastName: {
        type: String,
        required: true 
    },
    username: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true 
    },
},{
    timestamps:true,
});

const registerModel = mongoose.model('registerModel', registerSchema);

module.exports = registerModel;