import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PostContext } from "../contexts/PostContext";
import { useParams, useHistory } from "react-router-dom";

const initialItem = {
  url: "",
  title: "",
};

const UpdateForm = (props) => {
//   const history = useHistory();
const params = useParams();
const [item, setItem] = useState(initialItem);
const [post, setPost] = useContext(PostContext);


  console.log(item)

  useEffect(() => {
    axios
      .get(`https://floating-gorge-55081.herokuapp.com/api/posts/${params.id}`)
      .then((res) => setItem(res.data))
      .catch((error) => console.log(error));
  }, []);

  const changeHandler = (ev) => {
    ev.persist();
    let value = ev.target.value;

    setItem({
      ...item,
      [ev.target.name]: value,
    });
  };


  /// Ask Zac about the put request
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://floating-gorge-55081.herokuapp.com/api/posts/${params.id}`, item)
      .then((res) => {
        setPost(res.data)
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Update Post</h2>
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
          placeholder="Title"
          value={item.title}
        />
        <div className="baseline" />
        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
