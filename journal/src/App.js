import React, { useState, useEffect } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import PostList from './components/PostList';
import Home from "./components/Home";
import Post from "./components/Post";
import UpdateForm from './components/UpdateForm';
import PostForm from './components/PostForm';
import './App.css';
import { PostContext } from './contexts/PostContext';
import axios from 'axios'

function App() {
  const [post, setPost] = useState([
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    }
  ]);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10")
  //     .then((res) => {
  //       //   console.log(res.data)
  //       // setPost(res.data)
  //   })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <PostContext.Provider value={{ post }}>
      <div className="App">
          {/* Navbar */}
          <nav>
            <h1 className="store-header">Nomad Journal</h1>
            <div className="nav-links">
              <NavLink exact to="/post-form">
                Add Post
              </NavLink>
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/post-list">
                Dashboard
              </NavLink>
            </div>
          </nav>

          {/* Routes */}
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/post-list" component={PostList} />
            <Route exact path="/post-list/:id" component={Post}/>
            <Route exact path="/update-post/:id" component={UpdateForm} />
            <Route exact path="/post-form" component={PostForm} />
          </Switch>
      </div>
    </PostContext.Provider>
  );
}

export default App;
