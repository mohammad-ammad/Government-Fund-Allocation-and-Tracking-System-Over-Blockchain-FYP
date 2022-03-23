const db = require("../config/database");

module.exports = class DeptFund{

    static async Create(deptOwner,funds_amount,project_name,project_description,request_details,project_feedback,relevant_ministry_id){
        return db.execute("INSERT INTO department_funds_request_details(department_id,status_approval,funds_amount,project_name,project_description,request_details,project_feedback,relevant_ministry_id) VALUES(?,?,?,?,?,?,?,?)"
        ,[deptOwner,0,funds_amount,project_name,project_description,request_details,project_feedback,relevant_ministry_id]);
    }

    static Find(id)
    {
        return db.execute("select * FROM department_funds_request_details where department_id = (?) order by id desc",[id]);
    }

    static FindById(id)
    {
        return db.execute("select * FROM department_funds_request_details where id = (?)",[id]);
    }

    static DeleteOne(id)
    {
        return db.execute("Delete from department_funds_request_details where id = (?) and status_approval = 0",[id]);
    }

    static Update(funds_amount,project_name,project_description,request_details,project_feedback,id)
    {
        return db.execute("UPDATE department_funds_request_details SET funds_amount = (?), project_name = (?), 	project_description = (?), request_details = (?), project_feedback = (?)  where id = (?)",[funds_amount,project_name,project_description,request_details,project_feedback,id]);
    }

    static FindByOwner(id)
    {
        return db.execute("SELECT department_funds_request_details.*,department_details.office_name FROM department_funds_request_details INNER JOIN department_details ON department_funds_request_details.department_id = department_details.office_id WHERE department_funds_request_details.relevant_ministry_id = (?) order by department_funds_request_details.id desc",[id]);
    }

}