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