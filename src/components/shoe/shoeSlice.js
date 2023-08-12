import { createSlice } from '@reduxjs/toolkit';
import shoesList from './shoesList'

const initialState = {
    shoes: shoesList,
}

const shoeSlice = createSlice({
    name: 'shoe',
    initialState,
    reducers: {}
})

export default shoeSlice.reducer