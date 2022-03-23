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

    deptaddFundRequest: (state) => {
        state.loading = true;
    },
    deptaddFundSuccess: (state,action) => {
        state.loading = false;
        state.message = action.payload;
        state.isDept=true;
    },
    deptaddFundFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isDept=true;
    },

    deptfetchFundRequest: (state) => {
        state.loading = true;
    },
    deptfetchFundSuccess: (state,action) => {
        state.loading = false;
        state.deptFetchFund = action.payload;
        state.isDept=true;
    },
    deptfetchFundFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isDept=true;
    },

    deptdelFundRequest: (state) => {
        state.loading = true;
    },
    deptdelFundSuccess: (state,action) => {
        state.loading = false;
        state.message = action.payload;
        state.isDept=true;
    },
    deptdelFundFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isDept=true;
    },

    deptdfindOneFundRequest: (state) => {
        state.loading = true;
    },
    deptfindOneFundSuccess: (state,action) => {
        state.loading = false;
        state.findOneDeptFund = action.payload;
        state.isDept=true;
    },
    deptfindOneFundFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isDept=true;
    },

    deptupdateFundRequest: (state) => {
        state.loading = true;
    },
    deptupdateFundSuccess: (state,action) => {
        state.loading = false;
        state.message = action.payload;
        state.isDept=true;
    },
    deptupdateFundFailure: (state,action) => {
        state.loading = false;
        state.error = action.payload;
        state.isDept=true;
    },
});