import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import savedReducer from "./savedSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
  cart: persistReducer(persistConfig, cartReducer),
  save: persistReducer(persistConfig, savedReducer),
  order: persistReducer(persistConfig, orderReducer),
})


 export const store = configureStore({
   reducer: rootReducer,
   middleware: [thunk],
 });


export const persistor = persistStore(store)