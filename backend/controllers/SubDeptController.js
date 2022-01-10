const SubDept = require("../models/SubDept");
const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

exports.SubDeptSignup = async(req, res) =>{

    try {
        const [result] = await SubDept.findData(req.body.name);
        if(result.length != 0)
        {
            res.status(409).json({message: "department already exist"});
        }
        else{
            bcrpyt.hash(req.body.password, saltRounds).then(function(hash) {
                const user = {
                    name: req.body.name,
                    password: hash,
                    main_dept_id: req.body.main_dept_id
                }
    
                SubDept.CreateUser(user.name,user.password,user.main_dept_id).then(result => {
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
exports.subDeptLogin = async (req, res) =>{
    try {
        const [result] = await SubDept.findData(req.body.name);
        if(result.length != 0)
        {
            let hash = result[0]["password"];
            let password = req.body.password;
            bcrpyt.compare(password, hash).then(function(results) {
                jwt.sign({
                    name:result[0]["name"],
                    id:result[0]["id"],
                },'sub_dept', (err,token) => {
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