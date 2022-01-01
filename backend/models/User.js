const db = require("../config/database");

module.exports = class User{
    static fetchData(id){
        return db.execute("CALL getClassInfo(?)",[id]);
    }
}