import { configureStore, createSlice } from "@reduxjs/toolkit";

let count = createSlice({
    name: 'count',
    initialState : [
       {},
       {},
    ]
 })
 
 export default configureStore({
    reducer: {
       count : count.reducer,
    }
 })

 