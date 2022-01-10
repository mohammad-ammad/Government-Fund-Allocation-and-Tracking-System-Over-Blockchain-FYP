const express = require("express");

const app = express();


app.use(express.json())

// Routes import 
const getData = require("./routes/getDataRoute");
const ministrySignup = require("./routes/ministryRoute");
const ministryLogin = require("./routes/ministryRoute");
const getAllMinistryData = require("./routes/ministryRoute");
const changeMinistryStatus = require("./routes/ministryRoute");
const mainDeptSignup = require("./routes/mainDeptRoute");
const mainDeptLogin = require("./routes/mainDeptRoute");
const SubDeptSignup = require("./routes/subDeptRoute");
const subDeptLogin = require("./routes/subDeptRoute");

app.use("/api/v1", getData);

app.use("/api/v1", ministrySignup);
app.use("/api/v1", ministryLogin);
app.use("/api/v1", getAllMinistryData);
app.use("/api/v1", changeMinistryStatus);

app.use("/api/v1", mainDeptSignup);
app.use("/api/v1", mainDeptLogin);

app.use("/api/v1", SubDeptSignup);
app.use("/api/v1", subDeptLogin);

module.exports = app