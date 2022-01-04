const express = require("express");

const app = express();


app.use(express.json())

const verifyToken = require("./middleware/ministryAuth");

// Routes import 
const getData = require("./routes/getDataRoute");
const ministrySignup = require("./routes/ministryRoute");
const ministryLogin = require("./routes/ministryRoute");

app.use("/api/v1",verifyToken, getData);
app.use("/api/v1", ministrySignup);
app.use("/api/v1", ministryLogin);

module.exports = app