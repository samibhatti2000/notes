const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const nftholder = require("../models/nftHolder");

exports.createNftHolder = catchAsyncErrors(async (req, res, next) => {
  const { pubkey, location } = req.body;
  const NftHolder = await nftholder.create({
    pubkey: pubkey,
    location: location,
  });
  console.log(NftHolder);
  NftHolder.save();

  res.status(201).json({
    success: true,
    NftHolder,
  });
});

exports.getAllNftHolder = catchAsyncErrors(async (req, res, next) => {
  const NftHolder = await nftholder.find();

  res.status(200).json({
    success: true,
    NftHolder,
  });
});

exports.getOneNftHolder = catchAsyncErrors(async (req, res, next) => {
  const NftHolder = await nftholder.find({ pubkey: req.body.pubkey });

  res.status(200).json({
    success: true,
    NftHolder,
  });
});

exports.getOneNftHolderById = catchAsyncErrors(async (req, res, next) => {
  const NftHolder = await nftholder.findById(req.params.id);

  res.status(200).json({
    success: true,
    NftHolder,
  });
});

exports.updateNftHolder = catchAsyncErrors(async (req, res, next) => {
  NftHolder = await nftholder.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  await NftHolder.save();

  res.status(200).json({
    success: true,
    message: "NftHolder Updated Successfully",
  });
});

exports.deleteNftHolder = catchAsyncErrors(async (req, res, next) => {
  const NftHolder = await nftholder.findOneAndDelete(req.params.id);

  if (NftHolder) {
    res.status(200).json({
      success: true,
      message: "NftHolder Delete Successfully",
    });
  }
  res.status(200).json({
    success: false,
    message: "Please Put Correct Nftholder Address",
  });
});
