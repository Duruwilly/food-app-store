import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 cartItems: [],
 amount: 0,
 total: 0,
 isLoading: true,
}

const cartSlice = createSlice({
 name: 'cart',
 initialState,
 reducers: {
  addItem: (state, action) => {
   state.cartItems = action.payload;
  }
 }
})



export const { addItem } = cartSlice.actions
export default cartSlice.reducer