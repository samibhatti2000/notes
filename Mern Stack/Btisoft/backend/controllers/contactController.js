const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Contact = require("../models/contactModel");
const ErrorHander = require("../utils/errorhander");

exports.createContact = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, massage } = await req.body;
  const contact = await Contact.create({ name, email, phone, massage });

  res.status(200).json({
      success:true,
      contact,
  })
});


exports.getAllContectQuries = catchAsyncErrors(async(req,res,next)=>{
    const allQuries = await Contact.find();;
    if(!allQuries){
        next(new ErrorHander("no contac found", 401));
    }
    res.status(200).json({
        success:true,
        allQuries
    })

})


exports.deleteContact = catchAsyncErrors(async(req,res,next)=>{
    const contact = await Contact.findById(req.params.id);;
    if(!contact){
        next(new ErrorHander("no contact found", 401));
    }
    await contact.remove();
    res.status(200).json({
        success:true,
        massage:"contact deleted"
    })

})