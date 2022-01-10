const express = require("express");

const router = express.Router();

const {MainDeptSignup, mainDeptLogin} = require("../controllers/MainDeptController");

router.route("/main-dept-signup").post(MainDeptSignup);
router.route("/main-dept-login").post(mainDeptLogin);

module.exports = router