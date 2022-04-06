const express = require("express");
const {
  createProduct,
  getallproducts,
  getoneproduct,
  updateproduct,
  deleteProduct,
} = require("../controler/ProductControl");
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');

const router = express.Router();

router.route("/products").get(getallproducts);
router.route("/product/:id").get(getoneproduct);
router.route("/create/product").post(isAuthenticatedUser, authorizeRoles('admin','vendor') ,createProduct);
router.route("/update/product/:id").put(isAuthenticatedUser, authorizeRoles('admin','vendor') ,updateproduct);
router.route("/delete/product/:id").delete(isAuthenticatedUser, authorizeRoles('admin','vendor') ,deleteProduct);

module.exports = router;
