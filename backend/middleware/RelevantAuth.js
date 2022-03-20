const Relevant = require("../models/Relevant");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req,res,next) =>{
   try {
        const {relevant_token} = req.cookies;

        if(!relevant_token)
        {
            return res.status(401).json({
                message:"Please Login First"
            })
        }

        const decoded = await jwt.verify(relevant_token,process.env.JWT_SECRET_RELEVANT);

        req.releventOwner = decoded;

        req.relevantUser = await Relevant.FindById(decoded);
        
        next();

   } catch (error) {
       res.status(500).json({
           success:false,
           message:error.message
       })
   }
}