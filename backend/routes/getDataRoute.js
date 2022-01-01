const express = require("express");

const router = express.Router();

const {getData} = require("../controllers/getDataController");

router.route("/get-data").get(getData);

module.exports = router