const { json } = require('express/lib/response');
const Finance = require('../models/Finance');

exports.register = async (req, res) => {
    try {
        const {name, password} = req.body;

        if(name == null || password == null)
        {
            return res.status(400).json({
                success:false,
                message: "Please Fill all Fields",
            });
        }

        const [result] = await Finance.FindOne(name);

        if(result.length != 0)
        {
            return res.status(401).json({
                success:false,
                message: "User already exist"
            });
        }
        
        const user = await Finance.Create(name,password);
        
        if(user)
        {
            res.status(201).json({
                success:true,
                message: "Register successful"
            });
        }


    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.login = async (req,res) =>{
    try {
        const {name,password} = req.body;

        const [result] = await Finance.FindOne(name);

        if(result.length == 0)
        {
            return res.status(401).json({
                success:false,
                message: "User not found"
            });
        }

        const isMatch = await Finance.matchPassword(result[0]["finance_password"],password);

        if(!isMatch)
        {
            return res.status(400).json({
                success:false,
                message: "Password not match"
            });
        }

        const token = await Finance.generateToken(result[0]["finance_id"]);

        res.status(201).cookie("token",token,{
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
        const [result] = req.financeUser;

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

        res.status(200).cookie("token",null,{expires:new Date(Date.now()),httpOnly:true}).json({
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