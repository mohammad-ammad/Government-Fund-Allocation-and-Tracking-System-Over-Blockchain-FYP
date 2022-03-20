import {configureStore} from "@reduxjs/toolkit";
import {financeRelevantMinistryReducer, financeUserReducer} from "./Reducers/FinanceUser";
import {relevantUserReducer} from "./Reducers/RelevantUser";

const store = configureStore({
    reducer:{
        financeUser:financeUserReducer,
        financeRelevantMinistry:financeRelevantMinistryReducer,
        RelevantUser:relevantUserReducer
    }
});

export default store;