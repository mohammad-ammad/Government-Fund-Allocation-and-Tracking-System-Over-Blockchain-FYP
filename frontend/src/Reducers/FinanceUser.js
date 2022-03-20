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

    logoutRequest: (state) => {
        state.loading = true;
    },
    logoutSuccess: (state,action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated=false;
    },
    logoutFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated=false;
    },

})

export const financeRelevantMinistryReducer = createReducer({},{
    relevantRegisterRequest: (state) => {
        state.loading = true;
    },
    relevantRegisterSuccess: (state,action) => {
        state.loading = false;
        state.message = action.payload;
    },
    relevantRegisterFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
    },

    loadRelevantRequest: (state) => {
        state.loading = true;
    },
    loadRelevantSuccess: (state,action) => {
        state.loading = false;
        state.result = action.payload;
    },
    loadRelevantFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
    },

    deleteRelevantRequest: (state) => {
        state.loading = true;
    },
    deleteRelevantSuccess: (state,action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteRelevantFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
    },

    findRelevantRequest: (state) => {
        state.findloading = true;
    },
    findRelevantSuccess: (state,action) => {
        state.findloading = false;
        state.editRelevant = action.payload;
    },
    findRelevantFailure: (state,action) => {
        state.findloading = false;
        state.error = action.payload;
    },
    
    updateRelevantRequest: (state) => {
        state.updateloading = true;
    },
    updateRelevantSuccess: (state,action) => {
        state.updateloading = false;
        state.updatemessage = action.payload;
    },
    updateRelevantFailure: (state,action) => {
        state.updateloading = false;
        state.error = action.payload;
    },
});