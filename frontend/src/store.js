import {configureStore} from "@reduxjs/toolkit";
import {financeRelevantMinistryReducer, financeUserReducer} from "./Reducers/FinanceUser";
import {relevantUserReducer, relevantDeptReducer} from "./Reducers/RelevantUser";

const store = configureStore({
    reducer:{
        financeUser:financeUserReducer,
        financeRelevantMinistry:financeRelevantMinistryReducer,
        RelevantUser:relevantUserReducer,
        RelevantDept:relevantDeptReducer
    }
});

export default store;