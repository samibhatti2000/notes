const express = require("express");
const {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  logoutUser,
} = require("../controler/UserControl");
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');


const router = express.Router();

router.route("/create/user").post(registerUser);
router.route("/login/user").post(loginUser);
router.route("/logout/user").post(logoutUser);
router.route("/users").get(isAuthenticatedUser, authorizeRoles('admin'),getAllUsers);
router.route("/user/:id").get(isAuthenticatedUser, authorizeRoles('admin'),getOneUser);
router.route("/update/user/:id").put(isAuthenticatedUser, authorizeRoles('admin'),updateUser);
router.route("/delete/user/:id").delete(isAuthenticatedUser, authorizeRoles('admin'),deleteUser);

module.exports = router;
