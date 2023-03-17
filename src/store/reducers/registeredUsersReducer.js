import { createSlice, nanoid } from "@reduxjs/toolkit";
import alertValidation, {
  confirmAlert,
} from "../../components/alertValidation";

const localStorageUsers =
  localStorage.getItem("user") === null
    ? []
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
      const { resetFormData, newUser } = action.payload;

      state.userData.push(newUser);
      confirmAlert("Register succesful!");
      localStorage.setItem("user", JSON.stringify(state.userData));
      resetFormData(true);
    },
    changePassWord: (state, action) => {
      const { username, password, resetFormData } = action.payload;

      for (let i = 0; i < state.userData.length; i++) {
        if (state.userData[i].username === username) {
          state.userData.splice(i, 1, {
            ...state.userData[i],
            username: username,
            password: password,
          });
          return (
            localStorage.setItem("user", JSON.stringify(state.userData)),
            resetFormData(true),
            confirmAlert("Password changed!")
          );
        }
      }
      return alertValidation("warning", "Username does not exists!");
    },
    addNewPost: (state, action) => {
      const [text, username] = action.payload;

      if (text === "") return;

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

export const { registerUser, changePassWord, addNewPost, deletePost } =
  userDataBase.actions;
export default userDataBase.reducer;
