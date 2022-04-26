const db = require("../config/database");

module.exports = class RelevantFund{
    static Create(funds_amount,project_name,project_description,fund_req_address,rm_project_receive_date,rid)
    {
        return db.execute("INSERT INTO relevant_ministry_funds_details(funds_amount,project_name,project_description,fund_req_address,rm_project_receive_date,relevant_ministry_id) VALUES (?,?,?,?,?,?)",[funds_amount,project_name,project_description,fund_req_address,rm_project_receive_date,rid]);
    }

    static Find()
    {
        return db.execute("SELECT relevant_ministry_funds_details.*,relevant_ministry.relevant_ministry_name FROM relevant_ministry_funds_details INNER JOIN relevant_ministry ON relevant_ministry_funds_details.relevant_ministry_id = relevant_ministry.relevant_id order by relevant_ministry_funds_details.id desc");
    }

    static UpdateStatus(stattus_approval,ministry_approval_details,date,id)
    {
        return db.execute("UPDATE relevant_ministry_funds_details SET stattus_approval = (?), ministry_approval_details = (?), 	rm_approval_date = (?) WHERE id = (?)",[stattus_approval,ministry_approval_details,date,id]);
    }

    static FindById(id)
    {
        return db.execute("SELECT * FROM relevant_ministry_funds_details WHERE id = (?)",[id]);
    }

    static FindByOwner(id)
    {
        return db.execute("SELECT * FROM relevant_ministry_funds_details WHERE relevant_ministry_id = (?)",[id]);
    }

    static Update(id, project_name, project_description,funds_amount)
    {
        return db.execute("UPDATE relevant_ministry_funds_details SET project_name = (?), project_description = (?), funds_amount = (?) WHERE id = (?)",[project_name, project_description,funds_amount,id]);
    }

    static DeleteOne(id)
    {
        return db.execute("DELETE FROM relevant_ministry_funds_details WHERE id = (?)",[id]);
    }
}