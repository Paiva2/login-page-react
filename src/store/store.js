import { configureStore } from "@reduxjs/toolkit";
import { validateUserSlice } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    userData: validateUserSlice.reducer,
  },
});

export default store;
