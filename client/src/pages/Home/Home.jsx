import React, { useEffect } from "react";
import "./home.css";
import { useDispatch } from "react-redux";
import axios from "axios";

import Topbar from "../../components/topbar/Topbar";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Post from "../../components/post/Post";
import { addPost } from "../../store/slices/postslice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getallpost = async () => {
      const post = await axios.get("http://localhost:3030/api/v1/posts");
      dispatch(addPost(post.data));
    };
    getallpost();
  }, []);
  return (
    <>
      <Topbar />
      <div>
        <Header />
        <div className="home">
          <Post />
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
