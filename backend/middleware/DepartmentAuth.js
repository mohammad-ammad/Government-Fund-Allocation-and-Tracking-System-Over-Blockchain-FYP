const Department = require("../models/Department");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req,res,next) =>{
   try {
        const {dept_token} = req.cookies;

        if(!dept_token)
        {
            return res.status(401).json({
                message:"Please Login First"
            })
        }

        const decoded = await jwt.verify(dept_token,process.env.JWT_SECRET_DEPT);

        req.deptOwner = decoded;

        req.deptUser = await Department.FindById(decoded);
        
        next();

   } catch (error) {
       res.status(500).json({
           success:false,
           message:error.message
       })
   }
}