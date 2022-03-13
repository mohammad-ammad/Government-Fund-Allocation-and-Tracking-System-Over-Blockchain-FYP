import axios from "axios";

export const loginUser = (name,password) => async (dispatch) => {
    try {
        dispatch({
            type:"loginRequest"
        })
        const {data} = await axios.post("/api/v1/finance-login",{name,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"loginSuccess",
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:"loginFailure",
            payload:error
        })
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type:"loadUserRequest"
        })

        const {data} = await axios.get('/api/v1/finance-me');

        dispatch({
            type:"loadUserSuccess",
            payload:data.user
        })
    } catch (error) {
        dispatch({
            type:"loadUserFailure",
            payload:error
        })
    }
}