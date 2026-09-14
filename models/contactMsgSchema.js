const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const msgSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    topic : {
        type : String,
        enum: ['hosting', 'guest', 'bug', 'other'],
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
});

const Message = mongoose.model("Message", msgSchema);
module.exports = Message;

