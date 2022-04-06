const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  // try {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password});

  sendToken(user, 200, res);
  // res.status(200).json({
  //     success:true,
  //     massage:"user created succesfully",
  //     user
  // })

  // } catch (error) {
  //     res.status(error.code).json({
  //         success:false,
  //         Error: error,
  //         ErrorCode: error.code
  //     })
  // }
});

exports.loginUser = catchAsyncErrors( async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHander("Plaese enter email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email and password", 401));
  }

  const isPasswordMAtched = await user.comparePassword(password);
  if (!isPasswordMAtched) {
    return next(new ErrorHander("Invalid email and password", 401));
  }

  sendToken(user, 200, res);
});

exports.logout = catchAsyncErrors( async (req, res, next) => {
    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly:true
    });

    res.status(200).json({
        success:true,
        massage:"logout succesfully"
    })

});
//=======================basic user functions===================

// get all users
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const user = await User.find();
  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }
  res.status(200).json({
    success: true,
    user,
  });
});
exports.getOneUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }
  res.status(200).json({
    success: true,
    user,
  });
});

exports.updateUser = catchAsyncErrors(async (req, res, next) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }
  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    user,
  });
});
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }
  await user.remove();
  res.status(200).json({
    success: true,
    massage: "user deleted Successfully",
  });
});
