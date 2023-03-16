import { createSlice, nanoid } from "@reduxjs/toolkit";

const localStorageUsers =
  localStorage.getItem("user") === null
    ? [
        {
          username: "",
          password: "",
          posts: [],
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
      const [text, username] = action.payload;

      const newUserData = state.userData.map((user) => {
        if (user.username === username) {
          user.posts.push({ id: nanoid(4), text });
        }
        return user;
      });
      localStorage.setItem("user", JSON.stringify(newUserData));
    },
    deletePost: (state, action) => {
      const [postToDeleteID, username] = action.payload;

      const newUserData = state.userData.map((user) => {
        if (user.username === username) {
          user.posts.map((post, index) => {
            if (post.id === postToDeleteID) {
              user.posts.splice(index, 1);
            }
          });
        }
        return user;
      });
      localStorage.setItem("user", JSON.stringify(newUserData));
    },
  },
});

export const { registerUser, addNewPost, deletePost } = userDataBase.actions;
export default userDataBase.reducer;
9;
