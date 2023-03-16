import { React, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authorizeUser, userName } from "../store/reducers/userReducer";
import {
  addNewPost,
  deletePost,
} from "../store/reducers/registeredUsersReducer";
import { Helmet } from "react-helmet";
import "../styles/Home.css";
import UserGreeting from "./UserGreeting";
import { RiDeleteBinLine } from "react-icons/ri";

const Home = () => {
  const username = useSelector((state) => state.userData.username);
  const registeredUsers = useSelector(
    (state) => state.registerDataBase.userData
  );
  const textAreaRef = useRef();
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

  const newPost = () => {
    dispatch(addNewPost([postText, username]));
    textAreaRef.current.value = "";
    setPostText("");
  };

  const delPost = ({ target }) => {
    const postToDelete = target.closest(".post");
    const postToDeleteID = postToDelete.getAttribute("data-id");

    dispatch(deletePost([postToDeleteID, username]));
  };

  return (
    <div className="home-container">
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en-US" />
        <title>Home</title>
      </Helmet>
      <div className="home-wrapper">
        <div className="greeting-text">
          <UserGreeting greetingText={`There's your posts ${username}!`} />
        </div>
        <div className="text-area-container">
          <textarea
            onChange={(e) => setPostText(e.target.value)}
            id="postarea"
            name="postarea"
            rows="7"
            cols="50"
            placeholder="Post something here!"
            ref={textAreaRef}
            className="text-area"
          ></textarea>
          <button className="new-post-btn" onClick={newPost}>
            Post
          </button>
        </div>
        <div className="posts-container">
          <ul>
            {postData &&
              postData.map((post) => {
                return (
                  <div className="posts-wrapper" key={post.id}>
                    <li className="post" data-id={post.id}>
                      <div className="post-text">{post.text}</div>
                      <div className="post-del-btn">
                        <RiDeleteBinLine onClick={delPost} />
                      </div>
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
