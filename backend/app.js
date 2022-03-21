const express = require("express");
const cookiesParser = require("cookie-parser");

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookiesParser())

// Routes import  
const FinanceMinistry = require('./routes/financeMinistryRoute');
const RelevantMinistry = require('./routes/relevantMinistryRoute');
const Department = require('./routes/departmentRoute');


app.use("/api/v1", FinanceMinistry);
app.use("/api/v1", RelevantMinistry);
app.use("/api/v1", Department);



module.exports = app