import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 cartItems: [],
 totalAmount: 0,
 total: 0,
 totalCartQuantity: 0,
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
          ...newItem,
          quantity: 1,
        });
        state.totalCartQuantity++;
      }
    },
    removeItem(state, action) {
     state.changed = true
     const itemId = action.payload;
     const cartItem = state.cartItems.find((item) => item.id === itemId);
      if(cartItem) {
       state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
       state.totalCartQuantity--
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
    cartTotal(state) {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.quantity * item.price
      })
      state.total = total
    },
    clearCart(state) {
      state.cartItems = []
    },
    onCheckoutQuantity(state) {
      state.totalCartQuantity = 0
    }
  },
});

export const { addItem, removeItem, incrementItem, decrementItem, clearCart, onCheckoutQuantity } = cartSlice.actions
export default cartSlice.reducer