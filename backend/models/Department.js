const db = require("../config/database");
const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = class Department{

    static async Create(id,name,pass,owner_id){
        let hash = await bcrpyt.hash(pass,10);
        return db.execute("INSERT INTO department_details(office_id,office_name,office_password,relevant_ministry_id) VALUES(?,?,?,?)",[id,name,hash,owner_id]);
    }

    static FindById(id)
    {
        return db.execute("select * FROM department_details where office_id = (?)",[id]);
    }

    static FindByOwner(owner)
    {
        return db.execute("select * FROM department_details where relevant_ministry_id = (?)",[owner]);
    }

    static DeleteOne(id)
    {
        return db.execute("Delete from department_details where office_id = (?)",[id]);
    }

    static Update(name,id)
    {
        return db.execute("UPDATE department_details SET office_name = (?) where office_id = (?)",[name,id]);
    }

}