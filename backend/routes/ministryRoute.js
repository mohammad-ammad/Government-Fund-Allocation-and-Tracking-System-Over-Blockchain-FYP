const express = require("express");

const router = express.Router();

const {ministrySignup, ministryLogin} = require("../controllers/MinistryController");

router.route("/ministry-signup").post(ministrySignup);
router.route("/ministry-login").post(ministryLogin);

module.exports = router