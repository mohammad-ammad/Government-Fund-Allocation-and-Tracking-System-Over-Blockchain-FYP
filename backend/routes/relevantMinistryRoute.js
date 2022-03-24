const express = require("express");

const router = express.Router();

const {login, Profile, logout, register, get_all_departments, deleteDept, updateDept, findDept, findFunds, findFundById, updateFundStatus, relevantFundReq} = require('../controllers/RelevantMinistryController');
const { isAuthenticated } = require("../middleware/RelevantAuth");

router.route("/relevant-login").post(login);
router.route("/relevant/me").get(isAuthenticated,Profile);
router.route("/relevant/register-dept").post(isAuthenticated,register);
router.route("/relevant/get-dept").get(isAuthenticated,get_all_departments);
router.route("/relevant/delete-dept/:id").delete(isAuthenticated,deleteDept);
router.route("/relevant/edit-dept").put(isAuthenticated,updateDept);
router.route("/relevant/get-dept/:id").get(isAuthenticated,findDept);
router.route("/relevant/get-funds-request").get(isAuthenticated,findFunds);
router.route("/relevant/get-funds-request/:id").get(isAuthenticated,findFundById);
router.route("/relevant/update-funds-request-status").put(isAuthenticated,updateFundStatus);
router.route("/relevant/finance-fund-request").post(isAuthenticated,relevantFundReq);
router.route("/relevant/logout").get(logout);

module.exports = router;