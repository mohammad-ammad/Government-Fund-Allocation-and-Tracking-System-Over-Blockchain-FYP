const express = require("express");

const router = express.Router();

const {register, login} = require('../controllers/FinanceMinistryController');

router.route("/finance-register").post(register);
router.route("/finance-login").post(login);
// router.route("/finance-login").post(isAuthenticated,login);

module.exports = router;