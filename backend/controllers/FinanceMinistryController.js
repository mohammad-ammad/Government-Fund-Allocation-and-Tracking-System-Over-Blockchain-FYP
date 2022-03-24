const Finance = require('../models/Finance');
const Relevant = require('../models/Relevant');
const RelevantFund = require("../models/RelevantFund");

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

exports.add_relevant_ministry = async (req,res) =>{
    try {
        const {code,name, password} = req.body;

        if(!name || !password || !code)
        {
            return res.status(400).json({
                success:false,
                message: "Please Fill all Fields",
            });
        }

        const [result] = await Relevant.FindOne(code);

        if(result.length != 0)
        {
            return res.status(401).json({
                success:false,
                message: "Ministry Already Exist"
            });
        }

        const user = await Relevant.Create(code ,name,password);
        
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

exports.get_relevant_ministries = async (req,res) =>{
    try {
        const [result] = await Relevant.Find();

        res.status(201).json({
            success:true,
            result:result
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.deleteRelevantMinistry = async (req,res) =>{
    try {
        const {id} = req.body;
        const [result] = await Relevant.DeleteOne(id);

        if(result)
        {
            res.status(201).json({
                success:true,
                message:'Relevant Ministry Deleted Successfully',
            });
        }

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.findRelevantMinistry = async (req,res) =>{
    try {
        const [result] = await Relevant.FindById(req.params.id);

        if(result)
        {
            res.status(201).json({
                success:true,
                editResult:result[0],
            });
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.updateRelevantMinistry = async (req,res) =>{
    try {
        const {code,name,id} = req.body;
        const [result] = await Relevant.Update(code,name,id);

        if(result)
        {
            res.status(201).json({
                success:true,
                message:'updated successfull',
            });
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.get_relevant_fund_request = async (req,res) =>{
    try {
        const [result] = await RelevantFund.Find();

        res.status(201).json({
            success:true,
            result:result
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.relevantFundStatus = async (req,res) =>{
    try {
        const {stattus_approval,ministry_approval_details,id} = req.body;
        const [result] = await RelevantFund.UpdateStatus(stattus_approval,ministry_approval_details,new Date(Date.now()),id);

        if(result)
        {
            res.status(201).json({
                success:true,
                message:'updated successfull',
            });
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.findOneRelevantFund = async (req,res) =>{
    try {
        const [result] = await RelevantFund.FindById(req.params.id);

        if(result)
        {
            res.status(201).json({
                success:true,
                editResult:result[0],
            });
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}