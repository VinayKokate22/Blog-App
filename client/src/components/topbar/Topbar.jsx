import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { useSelector } from "react-redux";
import axios from "axios";

const Topbar = () => {
  const [User, setUser] = useState();
  const data = useSelector((state) => state.user);
  let user;
  data.success ? (user = true) : (user = false);
  const logoutuser = () => {
    window.location.reload();
  };
  const PF = "http://localhost:3030/images/";
  useEffect(() => {
    const getuserdata = async () => {
      const userdata = await axios.get(
        "http://localhost:3030/api/v1/user/profile",
        {
          headers: {
            authorization: "Bearer " + data.accesstoken,
          },
        }
      );
      setUser(userdata.data);
    };
    getuserdata();
  }, []);
  console.log(User, "this is the user data");
  return (
    <div className="topbar">
      <div className="leftsection">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="centersection">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && (
            <li
              className="topListItem"
              onClick={logoutuser}
              style={{ cursor: "pointer" }}
            >
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="rightsection">
        {user ? (
          <Link className="link" to="/setting">
            <img
              className="topImg"
              src={User && PF + User.dbuser.profilePic}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Topbar;
