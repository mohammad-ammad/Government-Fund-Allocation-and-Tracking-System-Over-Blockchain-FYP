const express = require("express");
const cookiesParser = require("cookie-parser");

const app = express();


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookiesParser())

// Routes import  
const register = require('./routes/financeMinistryRoute');
const login = require('./routes/financeMinistryRoute');
const Profile = require('./routes/financeMinistryRoute');
const logout = require('./routes/financeMinistryRoute');

app.use("/api/v1", register);
app.use("/api/v1", login);
app.use("/api/v1", Profile);
app.use("/api/v1", logout);


module.exports = app