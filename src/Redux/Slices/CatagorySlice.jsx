import { createSlice } from "@reduxjs/toolkit";

const CatagorySlice = createSlice({
    name : "catagory",
    initialState:{
        catagory:"All",
    },
    reducers:{
        setcatogary:(state, action)=>{
            state.catagory = action.payload;
        },
    },
})

export const {setcatogary} = CatagorySlice.actions;
export default CatagorySlice.reducer;