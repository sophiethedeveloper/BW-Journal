import React, { useContext, useEffect, useState } from "react";
import { Route, NavLink, useHistory, useParams } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";
import axios from "axios";

const Post = (props) => {
  const [post, setPost] = useContext(PostContext);
  const [newPost, setNewPost] = useState([])
  const history = useHistory();
  const params = useParams();

  // const postId = params._id;

  // const item = post.find((thing) => thing._id == postId);

  // console.log("item ids", post._id, postId);

  // if (!props.items.length || !item) {
  //     return <h2>Loading Post Data...</h2>
  // }

  // console.log("post id", postId);

  // const item = post.filter(thing => {
  //     // console.log('thing', thing)
  //     `${thing.id}` === postId
  // })

  useEffect(() => {
    axios
    .get(`https://floating-gorge-55081.herokuapp.com/api/posts/${params.id}`)
    .then((res) => {
      setNewPost(res.data)
    })
    .catch((error) => console.log(error));
  }, [])




  // console.log("params", typeof params.id);

  // console.log("props", props);
  // console.log("post array", post);

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`https://floating-gorge-55081.herokuapp.com/api/posts/${params.id}`)
      .then((res) => {
        setPost(res.data)
        history.push('/post-list')
      })
      .catch((error) => console.log(error));

  };

  return (
    <div>
      <div className="item-wrapper">
        <div className="item-title-wrapper">
          {/* add title */}
          <h2>{newPost.title}</h2>
        </div>
        <div className="item-header">
          <div className="image-wrapper">
            {/* // add image */}
            <img src={newPost.url} alt="picture" />
          </div>
        </div>
      </div>

      {/* Navbar */}

      <nav className="item-sub-nav">
        {/* <NavLink exact to={`/post-list/${item.id}`}>
          Story
        </NavLink> */}
      </nav>

      {/* Route */}

      <Route exact path="/post-list/:id" />

      {/* Buttons */}

      <button
        onClick={() => history.push(`/update-post/${newPost._id}`)}
        className="md-button"
      >
        Edit
      </button>

      <button className="md-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Post;
