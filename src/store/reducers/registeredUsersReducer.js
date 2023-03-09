import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [
    { username: "paiva", password: 123 },
    { username: "joao", password: 11 },
    { username: "abcde", password: 333 },
  ],
};

export const userDataBase = createSlice({
  name: "userDataBase",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.userData = [...state.userData, action.payload];
    },
  },
});

export const { registerUser } = userDataBase.actions;
export default userDataBase.reducer;
