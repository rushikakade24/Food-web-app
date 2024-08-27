import { createSlice} from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name: "cart",
    initialState:{
        cart:[],
    },
    reducers:{
        AddToCert:(state, action)=>{
            const exixtitem = state.cart.find((item)=> item.id===action.payload.id)
            if(exixtitem){
                state.cart = state.cart.map((item)=>item.id===action.payload.id ? {...item, qty: item.qty + 1}: item)
            } else{
                state.cart.push(action.payload)
            }
    
        },
        RemoveFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        inrementQty:(state, action)=>{
            state.cart= state.cart.map((item)=> item.id===action.payload.id?{...item, qty : item.qty+ 1}:item)
        },
        decrementQty:(state, action)=>{
            state.cart= state.cart.map((item)=> item.id===action.payload.id?{...item, qty: item.qty-1}:item)
        }
        
    }
    

})
export const {AddToCert,RemoveFromCart,inrementQty,decrementQty}= CartSlice.actions;
export default CartSlice.reducer;