const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const Products = require("../models/productsModel");
const ApiFeatures = require("../utils/apifeatures");



exports.createProduct = catchAsyncErrors(async (req, res, next) => {

  const { name, price, discription, avalDates, reviews, image } = req.body;
  user = req.user.id
  
  let product = await Products.create({
    name,
    price,
    discription,
    avalDates,
    reviews,
    image,
    user
  });

  product = req.body;

  res.status(200).json({
    success: true,
    massage: "Product created Succesfully",
    product,
  });
});

exports.getallproducts = catchAsyncErrors(async (req, res, next) => {

  const resultPerPage = 8;
  const productsCount = await Products.countDocuments();

  const apiFeatures = new ApiFeatures(Products.find(), req.query).search().filter();

  let products = await apiFeatures.query;

  let filteredProductsCount = products.length;

  apiFeatures.pagination(resultPerPage);

  // products = await apiFeatures.query;

  if (!products) {
    return next(new ErrorHander("Product not found",404));
  }

  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
});

//get on product details
exports.getoneproduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Products.findById(req.params.id);

  if (!products) {
    return next(new ErrorHander("Product not found",404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

//updating the product
exports.updateproduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Products.findById(req.params.id);

  if (!products) {
    return next(new ErrorHander("Product not found",404));
  }

  product = await Products.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    massage:"Products updated succesfuly",
    product,
  });
});


// deleting product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Products.findById(req.params.id);

  if (!products) {
    return next(new ErrorHander("Product not found",404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    massage:"Product deleted succesfully"
  });
});
