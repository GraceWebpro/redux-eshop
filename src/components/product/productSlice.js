import { createSlice } from '@reduxjs/toolkit';
import productList from './productList'

const initialState = {
    products: productList,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {}
})

export default productSlice.reducer