const express = require("express");

const app = express();

app.use(express.json())

// Routes import 
const getData = require("./routes/getDataRoute");

app.use("/api/v1", getData);

module.exports = app