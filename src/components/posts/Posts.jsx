import React from "react";
import "./posts.css";
import { Link } from "react-router-dom";
const Posts = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://img.freepik.com/free-photo/social-media-concept-with-smartphone_52683-100042.jpg?w=900&t=st=1680690993~exp=1680691593~hmac=b43b7d4ee544bb566de381bd663ddee31e02cfe2628a0c35e15e32d3097874af"
        alt=""
      />
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
          <Link to="/single" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
};

export default Posts;
