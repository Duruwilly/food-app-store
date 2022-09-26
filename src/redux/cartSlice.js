import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 cartItems: [],
 totalAmount: 0,
 total: 0,
 totalQuantity: 0,
 isLoading: true,
 changed: false,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
     state.changed = true
      const newItem = action.payload;
      console.log(newItem);
      // to check if item is already available
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          imgUrls: newItem.imgUrls,
          userRef: newItem.userRef,
          timestamp: newItem.timestamp,
        });
        state.totalQuantity++;
      }
    },
    removeItem(state, action) {
     state.changed = true
     const itemId = action.payload;
     const cartItem = state.cartItems.find((item) => item.id === itemId);
      if(cartItem) {
       state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
       state.totalQuantity--
      }
    },
    incrementItem(state, { payload }) {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrementItem(state, { payload }) {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
       cartItem.quantity = cartItem.quantity - 1;
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem } = cartSlice.actions
export default cartSlice.reducer