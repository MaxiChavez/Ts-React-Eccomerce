import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import detailSlice from "./detailSlice";
import searchSlice from "./searchSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import thunk from "redux-thunk";

const reducers = combineReducers({
  category: categorySlice,
  detail: detailSlice,
  search: searchSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
