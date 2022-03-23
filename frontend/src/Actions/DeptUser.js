import axios from "axios";

export const deptloginUser = (office_id,password) => async (dispatch) => {
    try {
        dispatch({
            type:"deptloginRequest"
        })
        const {data} = await axios.post("/api/v1/department-login",{office_id,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"deptloginSuccess",
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:"deptloginFailure",
            payload:error
        })
    }
}

export const deptloadUser = () => async (dispatch) => {
    try {
        dispatch({
            type:"deptloadUserRequest"
        })

        const {data} = await axios.get('/api/v1/department/me');

        dispatch({
            type:"deptloadUserSuccess",
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:"deptloadUserFailure",
            payload:error
        })
    }
}

export const logoutDept = () => async (dispatch) => {
    try {
        dispatch({
            type:"deptlogoutRequest"
        })

        const {data} = await axios.get('/api/v1/department/logout');

        dispatch({
            type:"deptlogoutSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"deptlogoutFailure",
            payload:error
        })
    }
}

export const deptaddFund = (funds_amount,project_name,project_description,request_details,project_feedback,relevant_ministry_id) => async (dispatch) => {
    try {
        dispatch({
            type:"deptaddFundRequest"
        })
        const {data} = await axios.post("/api/v1/department/project-request",{funds_amount,project_name,project_description,request_details,project_feedback,relevant_ministry_id},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"deptaddFundSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"deptaddFundFailure",
            payload:error
        })
    }
}

export const deptloadFundReq = () => async (dispatch) => {
    try {
        dispatch({
            type:"deptfetchFundRequest"
        })

        const {data} = await axios.get('/api/v1/department/all-project-request');

        dispatch({
            type:"deptfetchFundSuccess",
            payload:data.result
        })
    } catch (error) {
        dispatch({
            type:"deptfetchFundFailure",
            payload:error
        })
    }
}

export const deptdelFundReq = (id) => async (dispatch) => {
    try {
        dispatch({
            type:"deptdelFundRequest"
        })

        const {data} = await axios.delete(`/api/v1/department/project-request/${id}`);

        dispatch({
            type:"deptdelFundSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"deptdelFundFailure",
            payload:error
        })
    }
}

export const deptfindOneFundReq = (id) => async (dispatch) => {
    try {
        dispatch({
            type:"deptdfindOneFundRequest"
        })

        const {data} = await axios.get(`/api/v1/department/project-request/${id}`);

        dispatch({
            type:"deptfindOneFundSuccess",
            payload:data.result
        })
    } catch (error) {
        dispatch({
            type:"deptfindOneFundFailure",
            payload:error
        })
    }
}

export const updateDeptFund = (funds_amount,project_name,project_description,request_details,project_feedback,id) => async (dispatch) => {
    try {
        dispatch({
            type:"deptupdateFundRequest"
        })
        const {data} = await axios.put("/api/v1/department/project-request",{funds_amount,project_name,project_description,request_details,project_feedback,id},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"deptupdateFundSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"deptupdateFundFailure",
            payload:error
        })
    }
}