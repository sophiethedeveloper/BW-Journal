import React, { useContext } from "react";
import PostCard from "./PostCard";
import { PostContext } from "../contexts/PostContext";

const PostList = () => {
  const [post, setPost] = useContext(PostContext);

  return (
    <div>
      {post.map((p) => (
        <PostCard url={p.url} title={p.title} key={p.id} />
      ))}
    </div>
  );
};

export default PostList;
