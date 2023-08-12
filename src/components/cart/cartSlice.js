import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    number: 0,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            if(itemInCart) {
                itemInCart.number ++;
            } else {
                state.cartItems.push({...action.payload, number: 1})
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cartItems.filter(item => item.id !== action.payload)
            state.cartItems = removeItem;
        },
        increaseQ: (state, action) => {
            const item = state.cartItems.find(product => product.id === action.payload)
            item.number++
        },
        decreaseQ: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload)
            if(item.number === 1) {
                item.number = 1;
            } else {
                item.number --
            }
        },
        calculateTotals: (state, action) => {
            let number = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                number += item.number;
                total += item.number * item.price
            })
            state.number = number
            state.total = total
        }
    },
});

export const { addToCart, removeItem, increaseQ, decreaseQ, calculateTotals } = cartSlice.actions

export default cartSlice.reducer