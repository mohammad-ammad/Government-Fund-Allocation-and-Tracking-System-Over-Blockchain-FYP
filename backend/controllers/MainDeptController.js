const MainDept = require("../models/MainDept");
const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

exports.MainDeptSignup = async(req, res) =>{

    try {
        const [result] = await MainDept.findData(req.body.email);
        if(result.length != 0)
        {
            res.status(409).json({message: "Email already exist"});
        }
        else{
            bcrpyt.hash(req.body.password, saltRounds).then(function(hash) {
                const user = {
                    name: req.body.name,
                    email: req.body.email,
                    office_id: req.body.office_id,
                    password: hash,
                    meta_id: req.body.meta_mask_id,
                    ministry_id: req.body.ministry_id
                }
    
                MainDept.CreateUser(user.office_id,user.name,user.email,user.password,user.meta_id,user.ministry_id).then(result => {
                    res.status(201).json({message:"User created successfully"})
                }).catch(error => {
                    res.status(500).json({message:"Server Error"})
                })
            });
            
            
        }
       
    } catch (error) {
        res.status(500).json({message:error})
    }
    
}
exports.mainDeptLogin = async (req, res) =>{
    try {
        const [result] = await MainDept.findData(req.body.email);
        if(result.length != 0)
        {
            let hash = result[0]["password"];
            let password = req.body.password;
            bcrpyt.compare(password, hash).then(function(results) {
                jwt.sign({
                    name:result[0]["name"],
                    id:result[0]["id"],
                },'main_dept', (err,token) => {
                    res.status(201).json({message: "Authorized successful", token: token});
                })
            })            
        }
        else{
            res.status(409).json({message: "unauthorized name"});
        }
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }
}