const express = require("express");

const router = express.Router();

const {register, login, Profile, logout} = require('../controllers/FinanceMinistryController');

const {isAuthenticated} = require('../middleware/FinanceAuth');

router.route("/finance-register").post(register);
router.route("/finance-login").post(login);
router.route("/finance-logout").get(logout);
router.route("/finance-me").get(isAuthenticated,Profile);


module.exports = router;