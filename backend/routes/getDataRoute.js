const express = require("express");

const router = express.Router();

const {getData} = require("../controllers/getDataController");

//middlewares
const verifyToken = require("../middleware/ministryAuth");

router.route("/get-data").get(verifyToken,getData);

module.exports = router