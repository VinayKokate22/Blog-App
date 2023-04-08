import React, { useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Topbar from "../../components/topbar/Topbar";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Post from "../../components/post/Post";
import { addPost } from "../../store/slices/postslice";
import { addcategory } from "../../store/slices/categoryslice";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { search } = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    const getallpost = async () => {
      const post = await axios.get(
        "http://localhost:3030/api/v1/posts/" + search
      );

      dispatch(addPost(post.data));
    };
    getallpost();
  }, [search]);
  const data = useSelector((state) => state);

  return (
    <>
      {console.log("information about the user", data)}
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
