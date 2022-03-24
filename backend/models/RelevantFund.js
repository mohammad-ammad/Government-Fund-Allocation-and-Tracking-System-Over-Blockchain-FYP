const db = require("../config/database");

module.exports = class RelevantFund{
    static Create(funds_amount,project_name,project_description,rm_project_receive_date,rid)
    {
        return db.execute("INSERT INTO relevant_ministry_funds_details(funds_amount,project_name,project_description,rm_project_receive_date,relevant_ministry_id) VALUES (?,?,?,?,?)",[funds_amount,project_name,project_description,rm_project_receive_date,rid]);
    }

    static Find()
    {
        return db.execute("SELECT * FROM relevant_ministry_funds_details ORDER BY id DESC");
    }

    static UpdateStatus(stattus_approval,ministry_approval_details,date,id)
    {
        return db.execute("UPDATE relevant_ministry_funds_details SET stattus_approval = (?), ministry_approval_details = (?), 	rm_approval_date = (?) WHERE id = (?)",[stattus_approval,ministry_approval_details,date,id]);
    }

    static FindById(id)
    {
        return db.execute("SELECT * FROM relevant_ministry_funds_details WHERE id = (?)",[id]);
    }
}