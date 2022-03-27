import axios from "axios";

export const relevantloginUser = (code,password) => async (dispatch) => {
    try {
        dispatch({
            type:"relevantloginRequest"
        })
        const {data} = await axios.post("/api/v1/relevant-login",{code,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"relevantloginSuccess",
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:"relevantloginFailure",
            payload:error
        })
    }
}

export const relevantloadUser = () => async (dispatch) => {
    try {
        dispatch({
            type:"relevantloadUserRequest"
        })

        const {data} = await axios.get('/api/v1/relevant/me');

        dispatch({
            type:"relevantloadUserSuccess",
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:"relevantloadUserFailure",
            payload:error
        })
    }
}

export const relevantAddDept = (id,name,password) => async (dispatch) => {
    try {
        dispatch({
            type:"relevantAddDeptRequest"
        })
        const {data} = await axios.post("/api/v1/relevant/register-dept",{id,name,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"relevantAddDeptSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"relevantAddDeptFailure",
            payload:error
        })
    }
}

export const relevantloadDept = () => async (dispatch) => {
    try {
        dispatch({
            type:"relevantloadDeptRequest"
        })

        const {data} = await axios.get('/api/v1/relevant/get-dept');

        dispatch({
            type:"relevantloadDeptSuccess",
            payload:data.result
        })
    } catch (error) {
        dispatch({
            type:"relevantloadDeptFailure",
            payload:error
        })
    }
}

export const relevantdelDept = (id) => async (dispatch) => {
    try {
        dispatch({
            type:"relevantDelDeptRequest"
        })

        const {data} = await axios.delete(`/api/v1/relevant/delete-dept/${id}`);

        dispatch({
            type:"relevantDelDeptSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"relevantDelDeptFailure",
            payload:error
        })
    }
}

export const relevantEditDept = (id,name) => async (dispatch) => {
    try {
        dispatch({
            type:"relevanteditDeptRequest"
        })
        const {data} = await axios.put("/api/v1/relevant/edit-dept",{id,name},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"relevanteditDeptSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"relevanteditDeptFailure",
            payload:error
        })
    }
}

export const logoutRelevant = () => async (dispatch) => {
    try {
        dispatch({
            type:"relevantlogoutRequest"
        })

        const {data} = await axios.get('/api/v1/relevant/logout');

        dispatch({
            type:"relevantlogoutSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"relevantlogoutFailure",
            payload:error
        })
    }
}

export const loadFindFundsRelevant = () => async (dispatch) => {
    try {
        dispatch({
            type:"relevantallFundsRequest"
        })

        const {data} = await axios.get('/api/v1/relevant/get-funds-request');

        dispatch({
            type:"relevantallFundsSuccess",
            payload:data.result
        })
    } catch (error) {
        dispatch({
            type:"relevantallFundsFailure",
            payload:error
        })
    }
}

export const relevantUpdateFundStatus = (project_feedback,status_approval,id) => async (dispatch) => {
    try {
        dispatch({
            type:"relevantupdateFundStatusRequest"
        })
        const {data} = await axios.put("/api/v1/relevant/update-funds-request-status",{project_feedback,status_approval,id},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"relevantupdateFundStatusSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"relevantupdateFundStatusFailure",
            payload:error
        })
    }
}

export const loadRelevantFinanceFund = () => async (dispatch) => {
    try {
        dispatch({
            type:"loadrelevantFinanceRequest"
        })

        const {data} = await axios.get('/api/v1/relevant/finance-fund-retrieve');

        dispatch({
            type:"loadrelevantFinanceSuccess",
            payload:data.result
        })
    } catch (error) {
        dispatch({
            type:"loadrelevantFinanceFailure",
            payload:error
        })
    }
}

export const relevantupdateFinanceReq = (id, project_name, project_description,funds_amount) => async (dispatch) => {
    try {
        dispatch({
            type:"updaterelevantFinanceRequest"
        })
        const {data} = await axios.put("/api/v1/relevant/finance-fund-retrieve",{id, project_name, project_description,funds_amount},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"updaterelevantFinanceSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"updaterelevantFinanceFailure",
            payload:error
        })
    }
}