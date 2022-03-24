const express = require("express");

const router = express.Router();

const {login, Profile, logout, ProjectRequest, fetch_Funds, deleteFund, updateFund, findFund, findFeedback} = require("../controllers/DepartmentController");
const {isAuthenticated} = require("../middleware/DepartmentAuth");

router.route("/department-login").post(login);
router.route("/department/me").get(isAuthenticated,Profile);
router.route("/department/project-request").post(isAuthenticated,ProjectRequest);
router.route("/department/all-project-request").get(isAuthenticated,fetch_Funds);
router.route("/department/project-request/:id").delete(isAuthenticated,deleteFund).get(isAuthenticated,findFund);
router.route("/department/project-request").put(isAuthenticated,updateFund);
router.route("/department/project-feedback/:id").get(isAuthenticated,findFeedback);
router.route("/department/logout").get(logout);

module.exports = router;