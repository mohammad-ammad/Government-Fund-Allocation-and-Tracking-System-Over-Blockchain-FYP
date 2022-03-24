const Relevant = require('../models/Relevant');
const Department = require("../models/Department");
const DeptFund = require("../models/DeptFund");
const RelevantFund = require("../models/RelevantFund");

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

exports.register = async (req, res) => {
    try {
        const {id,name,password} = req.body;

        if(id == null || name == null || password == null)
        {
            return res.status(400).json({
                success:false,
                message: "Please Fill all Fields",
            });
        }

        const [result] = await Department.FindById(id);

        if(result.length != 0)
        {
            return res.status(401).json({
                success:false,
                message: "User already exist"
            });
        }
        
        const user = await Department.Create(id,name,password,req.releventOwner);
        
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

exports.get_all_departments = async (req,res) =>{
    try {
        const [result] = await Department.FindByOwner(req.releventOwner);

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

exports.deleteDept = async (req,res) =>{
    try {

        const [result] = await Department.DeleteOne(req.params.id);

        if(result)
        {
            res.status(201).json({
                success:true,
                message:'Department Deleted Successfully',
            });
        }

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.updateDept = async (req,res) =>{
    try {
        const {id, name} = req.body;
        const [result] = await Department.Update(name,id);

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

exports.findDept = async (req,res) =>{
    try {
        const [result] = await Department.FindById(req.params.id);

        if(result)
        {
            res.status(201).json({
                success:true,
                result:result[0],
            });
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.findFunds = async (req,res) =>{
    try {
        const [result] = await DeptFund.FindByOwner(req.releventOwner);

        if(result)
        {
            res.status(201).json({
                success:true,
                result:result,
            });
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.findFundById = async (req,res) =>{
    try {
        const [result] = await DeptFund.FindById(req.params.id);

        if(result)
        {
            res.status(201).json({
                success:true,
                result:result[0],
            });
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.updateFundStatus = async (req,res) =>{
    try {
        const {id, project_feedback,status_approval} = req.body;
        const [result] = await DeptFund.UpdateStatus(project_feedback,status_approval,id);

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

exports.relevantFundReq = async (req, res) => {
    try {
        const {funds_amount,project_name,project_description} = req.body;

        if(funds_amount == null || project_name == null || project_description == null)
        {
            return res.status(400).json({
                success:false,
                message: "Please Fill all Fields",
            });
        }
        
        const result = await RelevantFund.Create(funds_amount,project_name,project_description,new Date(Date.now()),req.releventOwner);
        
        if(result)
        {
            res.status(201).json({
                success:true,
                message: "Inserted successful"
            });
        }


    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}