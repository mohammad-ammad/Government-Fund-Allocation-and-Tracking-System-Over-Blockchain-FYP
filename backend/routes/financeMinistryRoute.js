const express = require("express");

const router = express.Router();

const {register, login, Profile, logout, add_relevant_ministry, get_relevant_ministries, deleteRelevantMinistry,findRelevantMinistry, updateRelevantMinistry, get_relevant_fund_request, relevantFundStatus, findOneRelevantFund } = require('../controllers/FinanceMinistryController');

const {isAuthenticated} = require('../middleware/FinanceAuth');

router.route("/finance-register").post(register);
router.route("/finance-login").post(login);
router.route("/finance-logout").get(logout);
router.route("/finance-me").get(isAuthenticated,Profile);

router.route("/add-relevant-ministry").post(isAuthenticated,add_relevant_ministry);
router.route("/get-relevant-ministry").get(isAuthenticated,get_relevant_ministries);
router.route("/delete-relevant-ministry").post(isAuthenticated,deleteRelevantMinistry);
router.route("/find-relevant-ministry/:id").get(isAuthenticated,findRelevantMinistry);
router.route("/edit-relevant-ministry").put(isAuthenticated,updateRelevantMinistry);
router.route("/get-relevant-funds").get(isAuthenticated,get_relevant_fund_request);
router.route("/relevant-fund-status").put(isAuthenticated,relevantFundStatus);
router.route("/relevant-findone-fund/:id").get(findOneRelevantFund);





module.exports = router;