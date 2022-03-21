const express = require("express");

const router = express.Router();

const {login, Profile, logout} = require("../controllers/DepartmentController");
const {isAuthenticated} = require("../middleware/DepartmentAuth");

router.route("/department-login").post(login);
router.route("/department/me").get(isAuthenticated,Profile);
router.route("/department/logout").get(logout);

module.exports = router;