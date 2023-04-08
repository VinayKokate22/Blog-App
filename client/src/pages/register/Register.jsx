import React, { useState } from "react";
import "./register.css";
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3030/api/v1/user/register",
        {
          username,
          email,
          password,
        }
      );
      console.log(res.data);
      res.data && window.location.replace("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Topbar />
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="registerButton">
            Register
          </button>
        </form>
        <Link to="/login">
          <button className="registerLoginButton">Login</button>
        </Link>
      </div>
    </>
  );
};

export default Register;
