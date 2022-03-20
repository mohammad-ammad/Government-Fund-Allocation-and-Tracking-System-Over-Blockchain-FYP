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

export const deleteRelevantMinistry = (id) => async (dispatch) => {
    try {
        dispatch({
            type:"deleteRelevantRequest"
        })

        const {data} = await axios.post('/api/v1/delete-relevant-ministry',{id},{
            headers:{
                "Content-Type":"application/json"
            }
        });

        dispatch({
            type:"deleteRelevantSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"deleteRelevantFailure",
            payload:error
        })
    }
}

export const findRelevantMinistry = (id) => async (dispatch) => {
    try {
        dispatch({
            type:"findRelevantRequest"
        })

        const {data} = await axios.get(`/api/v1/find-relevant-ministry/${id}`);

        dispatch({
            type:"findRelevantSuccess",
            payload:data.editResult
        })
    } catch (error) {
        dispatch({
            type:"findRelevantFailure",
            payload:error
        })
    }
}

export const editRelevantMinistry = (code,name,id) => async (dispatch) => {
    try {
        dispatch({
            type:"updateRelevantRequest"
        })

        const {data} = await axios.put("/api/v1/edit-relevant-ministry",{code,name,id},{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"updateRelevantSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"updateRelevantFailure",
            payload:error
        })
    }
}