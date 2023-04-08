import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./singlepost.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { adduniquePost } from "../../store/slices/uniquepost";
import Loading from "../loading/Loading";
const SinglePost = () => {
  const [edit, setedit] = useState(false);
  const [title, setTitle] = useState();
  const [desc, setdesc] = useState();
  const [error, seterror] = useState();
  const navigate = useNavigate();
  const userinfo = useSelector((state) => state.user);
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);

  const handledelete = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3030/api/v1/posts/delete/${id}`,
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
  const handleedit = async () => {
    try {
      console.log({ title, desc, photo: data.action.payload.photo });
      const res = await axios.put(
        `http://localhost:3030/api/v1/posts/update/${id}`,
        { title, desc, photo: data.action.payload.photo },
        {
          headers: {
            authorization: "Bearer " + userinfo.accesstoken,
          },
        }
      );
      console.log("the post after edit ", res);
      setedit(false);
    } catch (error) {
      seterror(true);
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const getPostById = async () => {
      const data = await axios.get(`http://localhost:3030/api/v1/posts/${id}`);
      dispatch(adduniquePost(data.data.dbpost));
    };

    getPostById();
  }, [edit]);

  const data = useSelector((state) => {
    return state.uniquepost;
  });

  console.log("this is the data", data);
  if (!data.action) {
    return (
      <div className="postsloading">
        <Loading />
      </div>
    );
  }
  if (data.action.payload._id !== id) {
    return (
      <div className="postsloading">
        <Loading />
      </div>
    );
  }
  const compareuser = userinfo.username === data.action.payload.username;

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={data.action.payload.photo} alt="" />
        <div className="singlePostTitle">
          {edit ? (
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              defaultValue={data.action.payload.title}
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1>{data.action.payload.title}</h1>
          )}
          {!edit &&
            (compareuser ? (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setedit(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handledelete}
                ></i>
              </div>
            ) : null)}
        </div>
        <div className="singlePostInfo ">
          {edit ? (
            <></>
          ) : (
            <div className="author_and_timeInfo">
              <span>
                Author:
                <b className="singlePostAuthor">
                  <Link
                    className="link"
                    to={`/?user=${data.action.payload.username}`}
                  >
                    {data.action.payload.username}
                  </Link>
                </b>
              </span>
              <span>
                {new Date(data.action.payload.createdAt).toDateString()}
              </span>
            </div>
          )}

          {edit ? (
            <div className="writeFormGroup  textareaupdate">
              <textarea
                className="writeInput writeText"
                placeholder="Tell your story..."
                type="text"
                defaultValue={data.action.payload.desc}
                autoFocus={true}
                onChange={(e) => setdesc(e.target.value)}
              />
              <button onClick={handleedit}>Update</button>
            </div>
          ) : (
            <p className="singlePostDesc">
              {data.action.payload.desc} <br /> <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore
              ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
              voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
              eos, dolore ea iusto impedit! Voluptatum necessitatibus eum
              beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Iste error quibusdam ipsa quis
              quidem doloribus eos, dolore ea iusto impedit! Voluptatum
              necessitatibus eum beatae, adipisci voluptas a odit modi eos!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos!
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
              impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
              odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore
              ea iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
              voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
              eos, dolore ea iusto impedit! Voluptatum necessitatibus eum
              beatae, adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit
              amet consectetur.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
