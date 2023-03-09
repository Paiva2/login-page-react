import { configureStore } from "@reduxjs/toolkit";
import { userDataBase } from "./reducers/registeredUsersReducer";
import { validateUserSlice } from "./reducers/userReducer";
const store = configureStore({
  reducer: {
    userData: validateUserSlice.reducer,
    registerDataBase: userDataBase.reducer,
  },
});
validateUserSlice;

export default store;
