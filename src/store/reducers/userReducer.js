import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  authorized: false,
};

export const validateUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authorizeUser: (state, action) => {
      state.authorized = action.payload;
    },
    userName: (state, action) => {
      state.username = action.payload;
    },
    passWord: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { authorizeUser, userName, passWord } = validateUserSlice.actions;
export default validateUserSlice.reducer;
