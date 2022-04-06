const mongoose = require('mongoose');
const validator = require('validator');
const { default: isEmail } = require('validator/lib/isEmail');

const contactSchema = mongoose.Schema({
    "name":{
        type: String,
        required:[true,"please enter your name"]
    },
    "email":{
        type: String,
        required:[true,"please enter your email"],
        validtae:[validator.isEmail,"please enter correct email"]
    },
    "phone":{
        type:Number,
        required:[true,"please enter your phone number"]
    },
    "massage":{
        type:String,
        required:[true,"pleaseennter you massage"]
    }
})

module.exports = mongoose.model('Contact', contactSchema);