import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated:false,
};

export const financeUserReducer = createReducer(initialState,{

    loginRequest: (state) => {
        state.loading = true;
    },
    loginSuccess: (state,action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated=true;
    },
    loginFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated=false;
    },

    registerRequest: (state) => {
        state.loading = true;
    },
    registerSuccess: (state,action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated=true;
    },
    registerFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated=false;
    },

    loadUserRequest: (state) => {
        state.loading = true;
    },
    loadUserSuccess: (state,action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated=true;
    },
    loadUserFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated=false;
    },

})