const express = require("express");

const router = express.Router();

const {SubDeptSignup, subDeptLogin} = require("../controllers/SubDeptController");

router.route("/sub-dept-signup").post(SubDeptSignup);
router.route("/sub-dept-login").post(subDeptLogin);

module.exports = router