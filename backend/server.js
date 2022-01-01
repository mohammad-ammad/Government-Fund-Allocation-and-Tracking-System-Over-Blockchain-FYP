const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({path:"backend/config/config.env"});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})