import React, { useState } from "react";
import "./login.css";
import Topbar from "../../components/topbar/Topbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/slices/userslice";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();

  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios
      .post("http://localhost:3030/api/v1/user/login", {
        username,
        password,
      })
      .catch((err) =>
        console.log("This is error : ", err.response?.data?.message)
      );
    console.log(res.data);
    dispatch(addUser(res.data));

    res.data && navigate("/");
  };

  return (
    <>
      <Topbar />
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your Username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="loginButton">
            Login
          </button>
        </form>
        <Link to="/register">
          <button className="loginRegisterButton">Register</button>
        </Link>
      </div>
    </>
  );
};

export default Login;
