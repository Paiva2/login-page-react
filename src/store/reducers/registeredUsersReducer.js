import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

export const userDataBase = createSlice({
  name: "userDataBase",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      [...state, action.payload];
    },
  },
});

export const { registerUser } = userDataBase.actions;
export default userDataBase.reducer;
