import React, { useEffect } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading/Loading";
import axios from "axios";
import { addcategory } from "../../store/slices/categoryslice";
const Sidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getallcategory = async () => {
      const cat = await axios.get("http://localhost:3030/api/v1/category/all");
      dispatch(addcategory(cat.data));
    };
    getallcategory();
  }, []);
  const data = useSelector((state) => {
    return state.category;
  });
  {
    console.log("they are category", data);
  }
  if (!data.action) {
    return (
      <div className="sidebarloading">
        <Loading />
      </div>
    );
  }

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
          {data.action.payload.dbcat.map((cat, i) => {
            return (
              <li key={i} className="sidebarListItem">
                <Link className="link" to={`/?cat=${cat.name}`}>
                  {cat.name}
                </Link>
              </li>
            );
          })}
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
