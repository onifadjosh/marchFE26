import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        firstName:"Pampam",
        lastName:"",
        students:[],
        count:10
    },

    reducers:{
        increaseNum:(state)=>{
            state.count++
        },

        increaseByNum:(state,actions)=>{
            state.count= state.count+actions.payload
        },
        addToStudents:(state, actions)=>{
            state.students.push(actions.payload)
        },

        deleteStudent:(state, actions)=>{
            state.students.splice(actions.payload, 1)
        },

        editStudents:(state, actions)=>{
            state.students.splice(actions.payload, 1)

        }
    }
})


export default appSlice.reducer

export const {increaseNum, increaseByNum, addToStudents, deleteStudent, editStudents}= appSlice.actions

