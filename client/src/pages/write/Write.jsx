import React, { useState } from "react";
import "./write.css";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Write = () => {
  const userinfo = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [desc, setdesc] = useState();
  const [file, setfile] = useState();
  const [categories, setcat] = useState();
  console.log("the categories is ", categories);
  const handlesubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
      categories,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:3030/api/v1/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        "http://localhost:3030/api/v1/posts/create",
        newPost,

        {
          headers: {
            authorization: "Bearer " + userinfo.accesstoken,
          },
        }
      );
      console.log(res);
      navigate("/");
    } catch (error) {}
  };
  return (
    <>
      <Topbar />
      <div className="write">
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
        <form className="writeForm" onSubmit={handlesubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setfile(e.target.files[0])}
            />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              cols="30"
              rows="10"
              autoFocus={true}
              onChange={(e) => setdesc(e.target.value)}
            />
          </div>
          <legend>Category</legend>
          <div className="categorylist">
            <label>
              <input
                id="indoor"
                type="radio"
                name="indoor-outdoor"
                value="music"
                onClick={(e) => setcat(e.target.value)}
              />
              Music
            </label>
            <label>
              <input
                id="outdoor"
                type="radio"
                name="indoor-outdoor"
                value="life"
                onClick={(e) => setcat(e.target.value)}
              />
              Life
            </label>
            <label>
              <input
                id="outdoor"
                type="radio"
                name="indoor-outdoor"
                value="sports"
                onClick={(e) => setcat(e.target.value)}
              />
              Sports
            </label>
            <label>
              <input
                id="outdoor"
                type="radio"
                name="indoor-outdoor"
                value="style"
                onClick={(e) => setcat(e.target.value)}
              />
              Style
            </label>
            <label>
              <input
                id="outdoor"
                type="radio"
                name="indoor-outdoor"
                value="Tech"
                onClick={(e) => setcat(e.target.value)}
              />
              Tech
            </label>
            <label>
              <input
                id="outdoor"
                type="radio"
                name="indoor-outdoor"
                value="cinema"
                onClick={(e) => setcat(e.target.value)}
              />
              Cinema
            </label>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default Write;
