import {configureStore} from "@reduxjs/toolkit";
import {financeRelevantMinistryReducer, financeUserReducer} from "./Reducers/FinanceUser";
import {relevantUserReducer, relevantDeptReducer, relevantFinanceReducer} from "./Reducers/RelevantUser";
import { deptUserReducer } from "./Reducers/DeptUser";

const store = configureStore({
    reducer:{
        financeUser:financeUserReducer,
        financeRelevantMinistry:financeRelevantMinistryReducer,
        RelevantUser:relevantUserReducer,
        RelevantDept:relevantDeptReducer,
        DeptUser:deptUserReducer,
        RelevantFinance: relevantFinanceReducer,
    }
});

export default store;