import React from "react";
import "./posts.css";
import { Link } from "react-router-dom";
const Posts = ({ prop }) => {
  const id = prop._id;
  return (
    <div className="post">
      <img className="postImg" src={prop.photo} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to={`/post/${id}`} className="link">
            {prop.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{prop.updatedAt}</span>
      </div>
      <p className="postDesc">{prop.desc}</p>
    </div>
  );
};

export default Posts;
