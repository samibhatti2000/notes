const express = require("express");
const router = express.Router();
const {
  createNftHolder,
  getAllNftHolder,
  deleteNftHolder,
  getOneNftHolder,
  updateNftHolder,
  getOneNftHolderById,
} = require("../controllers/nftHodlerController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router
  .route("/create/nftholder")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createNftHolder);
router
  .route("/getall/nftholders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllNftHolder);
router
  .route("/getone/nftholder/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getOneNftHolderById);
router.route("/getone/nftholder").post(getOneNftHolder);
router
  .route("/update/nftholder/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateNftHolder);
router
  .route("/delete/nftholder/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteNftHolder);

module.exports = router;
