const express = require("express");

const router = express.Router();

const {register, login, Profile, logout, add_relevant_ministry, get_relevant_ministries} = require('../controllers/FinanceMinistryController');

const {isAuthenticated} = require('../middleware/FinanceAuth');

router.route("/finance-register").post(register);
router.route("/finance-login").post(login);
router.route("/finance-logout").get(logout);
router.route("/finance-me").get(isAuthenticated,Profile);

router.route("/add-relevant-ministry").post(isAuthenticated,add_relevant_ministry);
router.route("/get-relevant-ministry").get(isAuthenticated,get_relevant_ministries);


module.exports = router;