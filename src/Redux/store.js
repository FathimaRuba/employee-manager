import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./employeeSlice";

const employeeStore = configureStore({
    reducer:{
        employeeReducer: employeeSlice
    }
})

export default employeeStore