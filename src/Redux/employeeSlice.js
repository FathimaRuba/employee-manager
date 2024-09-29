import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const employeeSlice = createSlice({
    name:'employee',
    initialState:{
        employee:[]
    },
    reducers:{
        addEmployee(state,action){
                state.employee.push(action.payload)
                toast.success('Employee added')
        },
        editEmployee(state,action){
            const emp = state.employee.filter(item=>item.id=action.payload.id)
               if(emp)
               {
                   state.employee=state.employee.filter(item=>item.id!=action.payload.id)
                   state.employee.push(action.payload)
                   console.log(action.payload)
                   toast.success('Succesfully Updated')
               }
               else{
                toast.error('Something went wrong')
               }
           },
           deleteEmployee(state,action){
            state.employee = state.employee.filter(item=>(item.id!=action.payload))
           }
    }
})

export default employeeSlice.reducer
export const { addEmployee,editEmployee,deleteEmployee } = employeeSlice.actions