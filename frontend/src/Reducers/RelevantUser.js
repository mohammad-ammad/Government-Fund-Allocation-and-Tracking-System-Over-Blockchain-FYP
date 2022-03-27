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

export const relevantDeptReducer = createReducer(initialState,{
    relevantAddDeptRequest: (state) => {
        state.addDeptloading = true;
    },
    relevantAddDeptSuccess: (state,action) => {
        state.addDeptloading = false;
        state.addDeptmessage = action.payload;
        state.isRelevant=true;
    },
    relevantAddDeptFailure: (state,action) => {
        state.addDeptloading = false;
        state.error = action.payload;
        state.isRelevant=false;
    },

    relevantloadDeptRequest: (state) => {
        state.deptloading = true;
    },
    relevantloadDeptSuccess: (state,action) => {
        state.deptloading = false;
        state.deptData = action.payload;
        state.isRelevant=true;
    },
    relevantloadDeptFailure: (state,action) => {
        state.deptloading = false;
        state.error = action.payload;
        state.isRelevant=false;
    },

    relevantDelDeptRequest: (state) => {
        state.delDeptloading = true;
    },
    relevantDelDeptSuccess: (state,action) => {
        state.delDeptloading = false;
        state.delDeptmessage = action.payload;
        state.isRelevant=true;
    },
    relevantDelDeptFailure: (state,action) => {
        state.delDeptloading = false;
        state.error = action.payload;
        state.isRelevant=false;
    },

    relevanteditDeptRequest: (state) => {
        state.editDeptloading = true;
    },
    relevanteditDeptSuccess: (state,action) => {
        state.editDeptloading = false;
        state.editDeptmessage = action.payload;
        state.isRelevant=true;
    },
    relevanteditDeptFailure: (state,action) => {
        state.editDeptloading = false;
        state.error = action.payload;
        state.isRelevant=false;
    },

    relevantallFundsRequest: (state) => {
        state.loading = true;
    },
    relevantallFundsSuccess: (state,action) => {
        state.loading = false;
        state.allFunds = action.payload;
        state.isRelevant=true;
    },
    relevantallFundsFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isRelevant=true;
    },

    relevantupdateFundStatusRequest: (state) => {
        state.loading = true;
    },
    relevantupdateFundStatusSuccess: (state,action) => {
        state.loading = false;
        state.message = action.payload;
        state.isRelevant=true;
    },
    relevantupdateFundStatusFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isRelevant=true;
    },


})

export const relevantFinanceReducer = createReducer(initialState,{
    
    loadrelevantFinanceRequest: (state) => {
        state.loading = true;
    },
    loadrelevantFinanceSuccess: (state,action) => {
        state.loading = false;
        state.relevantFinanceFundRequest = action.payload;
        state.isRelevant=true;
    },
    loadrelevantFinanceFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isRelevant=true;
    },

    updaterelevantFinanceRequest: (state) => {
        state.loading = true;
    },
    updaterelevantFinanceSuccess: (state,action) => {
        state.loading = false;
        state.message = action.payload;
        state.isRelevant=true;
    },
    updaterelevantFinanceFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isRelevant=true;
    },

})