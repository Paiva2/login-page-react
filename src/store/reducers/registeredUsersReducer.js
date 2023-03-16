import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const localStorageUsers =
  localStorage.getItem("user") === null
    ? [
        {
          username: "paiva",
          password: "123",
          posts: [
            {
              id: "QYS4",
              text: "Text 1",
            },
            {
              id: "QY4242",
              text: "Text 2",
            },
            {
              id: "ZYW4",
              text: "Text 3",
            },
          ],
        },
      ]
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
    addNewPost: (state, action) => {
      const newUserData = state.userData.map((user) => {
        const [text, username] = action.payload;
        if (user.username === username) {
          user.posts.push({ id: nanoid(4), text: text });
        }
        return user;
      });
      localStorage.setItem("user", JSON.stringify(newUserData));
    },
  },
});

export const { registerUser, addNewPost } = userDataBase.actions;
export default userDataBase.reducer;
9;
