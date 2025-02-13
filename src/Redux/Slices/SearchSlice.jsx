import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"Search",
    initialState:{
        search:"",
    },
    reducers:{
        setSearch:(state, action)=>{
            state.search = action.payload;
        },
    },
});
export const {setSearch}= searchSlice.actions;
export default searchSlice.reducer; 