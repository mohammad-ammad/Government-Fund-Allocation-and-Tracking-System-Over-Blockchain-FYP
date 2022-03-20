const express = require("express");

const router = express.Router();

const {login, Profile, logout} = require('../controllers/RelevantMinistryController');
const { isAuthenticated } = require("../middleware/RelevantAuth");

router.route("/relevant-login").post(login);
router.route("/relevant/me").get(isAuthenticated,Profile);
router.route("/relevant/logout").get(logout);

module.exports = router;