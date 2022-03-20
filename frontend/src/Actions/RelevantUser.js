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