import { React, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizeUser, userName } from "../store/reducers/userReducer";
import { registerUser } from "../store/reducers/registeredUsersReducer";
import { Helmet } from "react-helmet";
import "../styles/Home.css";

const Home = () => {
  const username = useSelector((state) => state.userData.username);
  const registeredUsers = useSelector(
    (state) => state.registerDataBase.userData
  );
  const [postText, setPostText] = useState("");
  const [postData, setPostData] = useState("");
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
    if (postText === "") return;
    const registeredUsersCopy = [...registeredUsers];

    const newUser = registeredUsersCopy.map((user) => {
      if (user.username === username) {
        const newPosts = [...user.posts, postText];
        return { ...user, posts: newPosts };
      }
      return user;
    });
    dispatch(registerUser(newUser));
    setLocalStorage(newUser);
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
                    <li>{post}</li>
                    <button style={{ margin: "2px" }}>Del</button>
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
