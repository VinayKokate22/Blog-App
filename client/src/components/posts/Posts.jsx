import React from "react";
import "./posts.css";
import { Link } from "react-router-dom";
const Posts = ({ prop }) => {
  const id = prop._id;
  const PF = "http://localhost:3030/images/";
  return (
    <div className="post">
      {prop.photo && <img className="postImg" src={PF + prop.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            {prop.categories && (
              <Link className="link" to="/">
                {prop.categories}
              </Link>
            )}
          </span>
        </div>
        <span className="postTitle">
          <Link to={`/post/${id}`} className="link">
            {prop.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(prop.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{prop.desc}</p>
    </div>
  );
};

export default Posts;
