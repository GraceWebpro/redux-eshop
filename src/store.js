import { configureStore } from '@reduxjs/toolkit';
import productReducer from './components/product/productSlice';
import cartReducer from './components/cart/cartSlice'
import shoeReducer from './components/shoe/shoeSlice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        shoe: shoeReducer,
    },
})