const mongoose = require('mongoose');
const validator = require('validator');


const protductShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter youn name'],
        // maxLength:[2,"name should have more 4 charecters"]
    },
    price: {
        type: Number,
        required: [true, 'please enter price of product']
    },
    discription: {
        type: String,
        required: [true, 'please enter product description']
    },
    numOfavalDates: {
        type: Number,
        default: 0
    },
    avalDates: [
        {
            type: String,
        }
    ],

    numOfreviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        user:{
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required:true,            
        },
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        }
    }],
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            img_url: {
                type: String,
                required: true
            }
        }
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required:true,            
    },
})

module.exports = mongoose.model('Products', protductShema);