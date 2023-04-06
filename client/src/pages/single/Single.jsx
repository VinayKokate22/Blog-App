import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/SinglePost";
import "./single.css";
import Topbar from "../../components/topbar/Topbar";
const Single = () => {
  return (
    <>
      <Topbar />
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
    </>
  );
};

export default Single;
