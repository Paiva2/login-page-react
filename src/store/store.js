import { configureStore } from "@reduxjs/toolkit";
import { userDataBase } from "./reducers/registeredUsersReducer";
import { validateUserSlice } from "./reducers/userReducer";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    userData: validateUserSlice.reducer,
    registerDataBase: userDataBase.reducer,
  },
});
validateUserSlice;

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export default store;
0;
