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