import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isDept:false,
};

export const deptUserReducer = createReducer(initialState,{
    deptloginRequest: (state) => {
        state.loading = true;
    },
    deptloginSuccess: (state,action) => {
        state.loading = false;
        state.user = action.payload;
        state.isDept=true;
    },
    deptloginFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isDept=false;
    },

    deptloadUserRequest: (state) => {
        state.loading = true;
    },
    deptloadUserSuccess: (state,action) => {
        state.loading = false;
        state.user = action.payload;
        state.isDept=true;
    },
    deptloadUserFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isDept=false;
    },

    deptlogoutRequest: (state) => {
        state.loading = true;
    },
    deptlogoutSuccess: (state,action) => {
        state.loading = false;
        state.message = action.payload;
        state.isDept=false;
    },
    deptlogoutFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isDept=false;
    },
});