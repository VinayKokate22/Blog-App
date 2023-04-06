import React from "react";
import "./post.css";
import Posts from "../posts/Posts";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";

const Post = () => {
  const data = useSelector((state) => {
    return state.post;
  });
  console.log("this is the data", data);
  if (!data.action) {
    return (
      <div className="postsloading">
        <Loading />
      </div>
    );
  }
  return (
    <div className="posts">
      {console.log(data.action.payload.dbpost)}
      {data.action.payload.dbpost.map((data, i) => {
        return <Posts key={i} prop={data} />;
      })}
    </div>
  );
};

export default Post;
