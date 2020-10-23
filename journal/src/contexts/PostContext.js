import React, { useState, createContext, useEffect } from "react";
// import { LoadingContext } from "../contexts/LoadingContext";
import axios from "axios";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [post, setPost] = useState([]);
  // const [isLoading, setIsLoading] = createContext(LoadingContext)

  // console.log('loading', isLoading)

  useEffect(() => {
    // setIsLoading(true)
    axios
      .get("https://floating-gorge-55081.herokuapp.com/api/posts")
      .then((res) => {
          // console.log('api call',res.data)
        setPost(res.data)
        // setIsLoading(false)

    })
      .catch((error) => console.log(error));
  }, []);

  return (
    <PostContext.Provider value={[post, setPost ]}>
      {props.children}
    </PostContext.Provider>
  );
};


