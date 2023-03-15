import { createSlice } from "@reduxjs/toolkit";

const localStorageUsers =
  localStorage.getItem("user") === null
    ? [{
      username: 'paiva',
      password: '123',
      posts: ["aaaa", "bbbbbbb", "cccccc", "dddddd"],
    }]
    : JSON.parse(localStorage.getItem("user"));

const registeredUsers = localStorageUsers;

const initialState = {
  userData: registeredUsers,
};

export const userDataBase = createSlice({
  name: "userDataBase",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { registerUser } = userDataBase.actions;
export default userDataBase.reducer;
