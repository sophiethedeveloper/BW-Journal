import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { PostContext } from "../contexts/PostContext";

import { useParams, useHistory } from "react-router-dom";

const initialItem = {
  url: "",
  title: "",
};

const PostForm = (props) => {
  const history = useHistory();
//   const { id } = useParams();
  const [item, setItem] = useState(initialItem);
  const [post, setPost] = useContext(PostContext);
  // const [isLoading, setIsLoading] = useContext(PostContext);



  const changeHandler = (ev) => {
    ev.persist();
    let value = ev.target.value;

    setItem({
      ...item,
      [ev.target.name]: value,
    });
  };

  // console.log('loading',isLoading)
 
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("https://floating-gorge-55081.herokuapp.com/api/posts", item)
        .then((res) => {
          setPost(res.data)
          history.push(`/post-list`)
        })
        .catch((error) => console.log(error));
    };
  



  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          onChange={changeHandler}
          placeholder="Url"
          value={item.name}
        />
        <div className="baseline" />
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="title"
          value={item.title}
        />
        <div className="baseline" />
        <button className="md-button form-button">Add New Post</button>
      </form>
    </div>
  );
};

export default PostForm;
