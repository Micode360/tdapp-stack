const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "register"
    },
    post: [{
        title: {type: String, required: true },
        body: {type: String, required: true }
    }],
},{
    timestamps:true,
});

const activityModel = mongoose.model('activityModel', userSchema);

module.exports = activityModel;