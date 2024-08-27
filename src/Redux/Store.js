import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './Slices/CartSlice';
import CatagorySlice from './Slices/CatagorySlice';
import SearchSlice from './Slices/SearchSlice';

const Store = configureStore({
    reducer:{
        cart: CartSlice,
        catagory: CatagorySlice,
        search: SearchSlice,
    },

});
export default Store;