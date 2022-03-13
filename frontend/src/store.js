import {configureStore} from "@reduxjs/toolkit";
import {financeUserReducer} from "./Reducers/FinanceUser";


const store = configureStore({
    reducer:{
        financeUser:financeUserReducer
    }
});

export default store;