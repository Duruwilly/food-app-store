import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
  isLoading: false,
  totalAmount: 0
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderItem(state, action) {
      const newItem = action.payload;
        state.orderItems.push({
          ...newItem,
        });
        state.totalAmount += newItem.totalAmount
    },
    clearOrder(state) {
     state.orderItems = []
    }
  },
});

export const { orderItem, clearOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
