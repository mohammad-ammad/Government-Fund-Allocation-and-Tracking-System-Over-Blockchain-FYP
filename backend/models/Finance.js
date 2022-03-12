const db = require("../config/database");
const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = class Finance{
    
    static async Create(name,password){

        let hashpassword = await bcrpyt.hash(password,10);
        return db.execute("Insert into finance_ministry(finance_name,finance_password) values(?,?)",[name,hashpassword]);
    }

    static FindOne(name)
    {
        return db.execute("select * FROM finance_ministry where finance_name = (?)",[name]);
    }

    static FindById(id)
    {
        return db.execute("select * FROM finance_ministry where finance_id = (?)",[id]);
    }

    static async matchPassword(hash,pass)
    {
        return await bcrpyt.compare(pass,hash);
    }

    static generateToken(id)
    {
        return jwt.sign(id,process.env.JWT_SECRET_FINANCE);
    }
    
}