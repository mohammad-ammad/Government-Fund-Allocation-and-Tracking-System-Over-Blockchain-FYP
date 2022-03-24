const Department = require("../models/Department");
const DeptFund = require('../models/DeptFund');
exports.login = async (req,res) =>{
    try {
        const {office_id,password} = req.body;

        const [result] = await Department.FindById(office_id);

        if(result.length == 0)
        {
            return res.status(401).json({
                success:false,
                message: "User not found"
            });
        }

        const isMatch = await Department.matchPassword(result[0]["office_password"],password);

        if(!isMatch)
        {
            return res.status(400).json({
                success:false,
                message: "Password not match"
            });
        }

        const token = await Department.generateToken(result[0]["office_id"]);

        res.status(201).cookie("dept_token",token,{
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
        const [result] = req.deptUser;

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

        res.status(200).cookie("dept_token",null,{expires:new Date(Date.now()),httpOnly:true}).json({
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

exports.ProjectRequest = async (req,res) =>{
    try {
        const {funds_amount,project_name,project_description,request_details,project_feedback,relevant_ministry_id} = req.body;

        if(!funds_amount || !project_name || !project_description || !request_details || !project_feedback || !relevant_ministry_id)
        {
            return res.status(400).json({
                success:false,
                message: "Please Fill all Fields",
            });
        }

        const result = await DeptFund.Create(req.deptOwner,funds_amount,project_name,project_description,request_details,project_feedback,relevant_ministry_id);

        if(result)
        {
            res.status(201).json({
                success:true,
                message: "Request Successful"
            });
        }

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.fetch_Funds = async (req,res) =>{
    try {
        const [result] = await DeptFund.Find(req.deptOwner);

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

exports.deleteFund = async (req,res) =>{
    try {

        const [result] = await DeptFund.DeleteOne(req.params.id);

        if(result)
        {
            res.status(201).json({
                success:true,
                message:'Fund Deleted Successfully',
            });
        }

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

exports.updateFund = async (req,res) =>{
    try {
        const {funds_amount,project_name,project_description,request_details,project_feedback,id} = req.body;
        const [result] = await DeptFund.Update(funds_amount,project_name,project_description,request_details,project_feedback,id);

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

exports.findFund = async (req,res) =>{
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

exports.findFeedback = async (req,res) =>{
    try {
        const [result] = await DeptFund.FindFeedBack(req.params.id);

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