const db = require("../config/database");

module.exports = class MainDept{
    static findData(email){
        return db.execute("Select * from tbl_main_dept where email = (?)",[email]);
    }
    static CreateUser(office,name,email,password,meta_id,ministry_id){
        return db.execute("CALL add_main_dept(?,?,?,?,?,?)",[office,name,email,password,meta_id,ministry_id]);
    }
    
}