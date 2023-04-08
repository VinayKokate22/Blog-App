import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
const Setting = () => {
  const [User, setUser] = useState();
  useEffect(() => {
    const getuserdata = async () => {
      const userdata = await axios.get(
        "http://localhost:3030/api/v1/user/profile",
        {
          headers: {
            authorization: "Bearer " + userinfo.accesstoken,
          },
        }
      );
      setUser(userdata.data);
    };
    getuserdata();
  }, []);
  console.log(User);
  const navigate = useNavigate();
  const userinfo = useSelector((state) => state.user);

  const [email, setemail] = useState();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      "http://localhost:3030/api/v1/user/update",
      {
        email,
      },
      {
        headers: {
          authorization: "Bearer " + userinfo.accesstoken,
        },
      }
    );

    if (res.status === 200) {
      navigate("/");
    }
  };
  const handledeleteUser = async (e) => {
    e.preventDefault();
    const res = await axios.delete(
      "http://localhost:3030/api/v1/user/delete",

      {
        headers: {
          authorization: "Bearer " + userinfo.accesstoken,
        },
      }
    );

    if (res.status === 200) {
      window.location.replace("/");
    }
  };

  return (
    <>
      <Topbar />
      <div className="settings">
        {!User?.dbuser ? (
          <div className="settingloader">
            <Loading />
          </div>
        ) : (
          <div className="settingsWrapper">
            <div className="settingsTitle">
              <span className="settingsTitleUpdate">
                Hi !! {userinfo.username}
              </span>
              <span className="settingsTitleDelete" onClick={handledeleteUser}>
                Delete Account
              </span>
            </div>
            <form className="settingsForm" onSubmit={handlesubmit}>
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img
                  src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                </label>
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: "none" }}
                  className="settingsPPInput"
                />
              </div>

              <label>Email</label>
              <input
                type="email"
                placeholder={User.dbuser.email}
                name="email"
                onChange={(e) => setemail(e.target.value)}
              />

              <button className="settingsSubmitButton" onClick={handlesubmit}>
                Update
              </button>
            </form>
          </div>
        )}

        <Sidebar />
      </div>
    </>
  );
};

export default Setting;
