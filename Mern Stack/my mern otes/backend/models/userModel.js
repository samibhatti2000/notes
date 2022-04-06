const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter your name"],
    maxLength: [30, "name cannot be exceed 300 characters"],
  },
  email: {
    type: String,
    require: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a email"],
  },
  password: {
    type: String,
    require: [true, "Please enter your password"],
    minLength: [8, "password should be greater than 8 characters"],
    select: false,
  },
  avatar: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

//bcrypt.hash password
userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        next
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// compare password
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.getJWTToken = function (){
  return jwt.sign({id: this._id},process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRE,
  });
}

module.exports = mongoose.model("User", userSchema);
