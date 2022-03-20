const Relevant = require('../models/Relevant');

exports.login = async (req,res) =>{
    try {
        const {code,password} = req.body;

        const [result] = await Relevant.FindOne(code);

        if(result.length == 0)
        {
            return res.status(401).json({
                success:false,
                message: "User not found"
            });
        }

        const isMatch = await Relevant.matchPassword(result[0]["relevant_ministry_pass"],password);

        if(!isMatch)
        {
            return res.status(400).json({
                success:false,
                message: "Password not match"
            });
        }

        const token = await Relevant.generateToken(result[0]["relevant_id"]);

        res.status(201).cookie("relevant_token",token,{
            expires:new Date(Date.now()+90*24*60*60*1000),
            httpOnly:true
        }).json({
            success:true,
            message: "Login successful",
            token:token,
            user:result[0]
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.Profile = async (req,res) =>{
    try {
        const [result] = req.relevantUser;

        res.status(201).json({
            success:true,
            user:result[0]
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.logout = async (req,res) =>{
    try {

        res.status(200).cookie("relevant_token",null,{expires:new Date(Date.now()),httpOnly:true}).json({
            success:true,
            message:"logout"
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}