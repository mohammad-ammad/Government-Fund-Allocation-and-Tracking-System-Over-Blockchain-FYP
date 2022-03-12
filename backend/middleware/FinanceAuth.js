const Finance = require("../models/Finance");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req,res,next) =>{
   try {
        const {token} = req.cookies;

        if(!token)
        {
            return res.status(401).json({
                message:"Please Login First"
            })
        }

        const decoded = await jwt.verify(token,process.env.JWT_SECRET_FINANCE);

        req.financeUser = await Finance.FindById(decoded);
        next();

   } catch (error) {
       res.status(500).json({
           success:false,
           message:error.message
       })
   }
}