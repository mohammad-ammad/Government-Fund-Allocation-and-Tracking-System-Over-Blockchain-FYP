import {configureStore} from "@reduxjs/toolkit";
import {financeRelevantMinistryReducer, financeUserReducer} from "./Reducers/FinanceUser";


const store = configureStore({
    reducer:{
        financeUser:financeUserReducer,
        financeRelevantMinistry:financeRelevantMinistryReducer
    }
});

export default store;