import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
 savedItems: [],
 isLoading: true,
}

const savedSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    savedItem(state, action) {
      const newItem = action.payload;
      // to check if item is already available
      const existingItem = state.savedItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        toast.info("item already added to your wishlist")
      } else {
        state.savedItems.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          description: newItem.description,
          imgUrls: newItem.imgUrls,
          userRef: newItem.userRef,
          timestamp: newItem.timestamp,
        });
      }
    },
    removeSavedItem(state, action) {
     const itemId = action.payload;
     const cartItem = state.savedItems.find((item) => item.id === itemId);
      if(cartItem) {
       state.savedItems = state.savedItems.filter((item) => item.id !== itemId);
      }
    },
    removeAll(state) {
     state.savedItems = []
    }
  },
});

export const { savedItem, removeSavedItem, removeAll } = savedSlice.actions
export default savedSlice.reducer