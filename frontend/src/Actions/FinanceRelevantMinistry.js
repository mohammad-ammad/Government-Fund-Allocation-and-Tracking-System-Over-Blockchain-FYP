import axios from "axios";

export const registerRelevantMinistry = (code,name,password) => async (dispatch) => {
    try {
        dispatch({
            type:"relevantRegisterRequest"
        })
        const {data} = await axios.post("/api/v1/add-relevant-ministry",{code,name,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"relevantRegisterSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"relevantRegisterFailure",
            payload:error
        })
    }
}

export const loadRelevantMinistry = () => async (dispatch) => {
    try {
        dispatch({
            type:"loadRelevantRequest"
        })

        const {data} = await axios.get('/api/v1/get-relevant-ministry');

        dispatch({
            type:"loadRelevantSuccess",
            payload:data.result
        })
    } catch (error) {
        dispatch({
            type:"loadRelevantFailure",
            payload:error
        })
    }
}