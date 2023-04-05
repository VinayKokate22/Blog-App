import React from "react";
import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Post from "../../components/post/Post";
import Single from "../single/Single";
import Write from "../write/Write";
import Setting from "../settingpage/Setting";
import Login from "../login/Login";
import Register from "../register/Register";

const Home = () => {
  return (
    <>
      <Topbar />
      <div>
        <Header />
        <div className="home">
          <Post />
          <Sidebar />
        </div>
        {/* <Single /> */}
        {/* <Write /> */}
        {/* <Setting /> */}
        {/* <Login /> */}
      </div>
    </>
  );
};

export default Home;
