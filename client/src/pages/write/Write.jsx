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
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3030/api/v1/posts/create",
        {
          title,
          desc,
          photo:
            "https://img.freepik.com/free-vector/3d-grid-wormhole-illusion-design-element-vector_53876-166832.jpg?w=360&t=st=1680843818~exp=1680844418~hmac=b798dde36f370bcc9420f3bce1e6c609909a0b534503638dbcb2be2085b6e936",
        },
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
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <form className="writeForm" onSubmit={handlesubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
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
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default Write;
