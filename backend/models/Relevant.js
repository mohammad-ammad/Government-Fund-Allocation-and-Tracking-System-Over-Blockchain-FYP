const db = require("../config/database");
const bcrpyt = require("bcrypt");
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
}