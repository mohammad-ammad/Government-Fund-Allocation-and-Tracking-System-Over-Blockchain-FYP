const db = require("../config/database");
const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = class Relevant{
    static async Create(code,name,password){
        let hashpassword = await bcrpyt.hash(password,10);
        return db.execute("Insert into relevant_ministry(relevant_ministry_id,relevant_ministry_name,relevant_ministry_pass) values(?,?,?)",[code,name,hashpassword]);
    }

    static FindOne(code)
    {
        return db.execute("select * FROM relevant_ministry where relevant_ministry_id = (?)",[code]);
    }

    static Find()
    {
        return db.execute("select * FROM relevant_ministry");
    }

    static FindById(id)
    {
        return db.execute("select * FROM relevant_ministry where relevant_id = (?)",[id]);
    }

    static DeleteOne(id)
    {
        return db.execute("Delete from relevant_ministry where relevant_id = (?)",[id]);
    }

    static Update(code,name,id)
    {
        return db.execute("UPDATE relevant_ministry SET relevant_ministry_id = (?), relevant_ministry_name = (?)  where relevant_id = (?)",[code,name,id]);
    }

    static async matchPassword(hash,pass)
    {
        return await bcrpyt.compare(pass,hash);
    }

    static generateToken(id)
    {
        return jwt.sign(id,process.env.JWT_SECRET_RELEVANT);
    }
}