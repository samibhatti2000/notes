const express = require("express");
const {
  createContact,
  getAllContectQuries,
  deleteContact,
} = require("../controllers/contactController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/post/contact").post(createContact);
router.route("/contact").get(getAllContectQuries);
router.route("/delete/contact/:id").delete(deleteContact);

module.exports = router;
