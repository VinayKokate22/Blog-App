import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://img.freepik.com/free-photo/aerial-view-woman-using-computer-laptop-wooden-table_53876-20661.jpg?w=900&t=st=1680681401~exp=1680682001~hmac=48fc15c5bb6e34eae9acafd01815af4e7ef4a8025e17bf2bd46c6a22a4095dd9"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
