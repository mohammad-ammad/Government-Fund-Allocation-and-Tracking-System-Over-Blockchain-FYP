const db = require("../config/database");

module.exports = class SubDept{
    static findData(name){
        return db.execute("Select * from tbl_sub_dept where name = (?)",[name]);
    }
    static CreateUser(name,pass,main_dept_id){
        return db.execute("CALL add_sub_dept(?,?,?)",[name,pass,main_dept_id]);
    }
    
}