import { React, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizeUser, userName } from "../store/reducers/userReducer";
import {
  registerUser,
  addNewPost,
} from "../store/reducers/registeredUsersReducer";
import { Helmet } from "react-helmet";
import "../styles/Home.css";

const Home = () => {
  const username = useSelector((state) => state.userData.username);
  const registeredUsers = useSelector(
    (state) => state.registerDataBase.userData
  );
  const [postText, setPostText] = useState("");
  const [postData, setPostData] = useState("");
  const postRef = useRef();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    registeredUsers.map((user) => {
      if (user.username === username) {
        setPostData(user.posts);
      }
    });
  }, [registeredUsers]);

  const handleExit = () => {
    dispatch(authorizeUser(false));
    dispatch(userName(""));
  };

  const setLocalStorage = (usersData) => {
    localStorage.setItem("user", JSON.stringify(usersData));
  };

  const newPost = () => {
    dispatch(addNewPost([postText, username]));
  };

  const delPost = ({ target }) => {
    const registeredUsersCopy = [...registeredUsers];
    const postToDelete = target.closest(".post");
    const postToDeleteID = postToDelete.getAttribute("data-id");

    const newUserData = registeredUsers.map((user) => {
      let userposts;
      user.posts.map((post, index) => {
        if (post.id === postToDeleteID) {
          const postsCopy = [...user.posts];
          postsCopy.splice(index, 1);
          return (userposts = { ...user, posts: postsCopy });
        }
      });
    });
    //dispatch(registerUser(newUserData));
    //setLocalStorage(newUserData);
  };

  return (
    <div className="home-container">
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en-US" />
        <title>Home</title>
      </Helmet>
      <div>
        <h1>Welcome! Username</h1>
        <div className="text-area-container">
          <textarea
            onChange={(e) => setPostText(e.target.value)}
            id="postarea"
            name="postarea"
            rows="7"
            cols="50"
            placeholder="Post something here!"
          ></textarea>
          <button onClick={newPost}>Post</button>
        </div>
        <div className="posts-container">
          <ul>
            {postData &&
              postData.map((post) => {
                return (
                  <div style={{ display: "flex" }}>
                    <li className="post" data-id={post.id}>
                      {post.text}
                      <button onClick={delPost} style={{ margin: "2px" }}>
                        Del
                      </button>
                    </li>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
      <button className="home-back-btn" onClick={handleExit}>
        Exit
      </button>
    </div>
  );
};

export default Home;
