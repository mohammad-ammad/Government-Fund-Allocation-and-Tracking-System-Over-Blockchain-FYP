const db = require("../config/database");

module.exports = class Ministry{
    static findData(email){
        return db.execute("Select * from tbl_ministry where name = (?)",[email]);
    }
    static CreateUser(name,password,meta_id){
        return db.execute("CALL add_ministry_users(?,?,?)",[name,password,meta_id]);
    }
    
}