import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isRelevant:false,
};

export const relevantUserReducer = createReducer(initialState,{

    relevantloginRequest: (state) => {
        state.loading = true;
    },
    relevantloginSuccess: (state,action) => {
        state.loading = false;
        state.user = action.payload;
        state.isRelevant=true;
    },
    relevantloginFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isRelevant=false;
    },


    relevantloadUserRequest: (state) => {
        state.loading = true;
    },
    relevantloadUserSuccess: (state,action) => {
        state.loading = false;
        state.user = action.payload;
        state.isRelevant=true;
    },
    relevantloadUserFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isRelevant=false;
    },

    relevantlogoutRequest: (state) => {
        state.loading = true;
    },
    relevantlogoutSuccess: (state,action) => {
        state.loading = false;
        state.message = action.payload;
        state.isRelevant=false;
    },
    relevantlogoutFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isRelevant=false;
    },

})