const express = require("express");

const router = express.Router();

const {ministrySignup, ministryLogin, getAllMinistryData, changeMinistryStatus} = require("../controllers/MinistryController");

//middlewares
const verifyToken = require("../middleware/ministryAuth");

router.route("/ministry-signup").post(ministrySignup);
router.route("/ministry-login").post(ministryLogin);
router.route("/get-ministry").get(verifyToken,getAllMinistryData);
router.route("/ministry-status/:type/:id").get(verifyToken,changeMinistryStatus);

module.exports = router