import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [
    { username: "paiva", password: 1234 },
    { username: "joao", password: 1234 },
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
