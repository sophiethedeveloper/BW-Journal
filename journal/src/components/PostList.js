import React, { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import {useHistory} from 'react-router-dom'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
  } from "reactstrap";


const PostList = () => {
  const history = useHistory();
  const [post, setPost] = useContext(PostContext);

    function routeToPost(ev, item) {
        ev.preventDefault();
        history.push(`/post-list/${item._id}`)
    }

    console.log('post', post)

  return (
    <div className="items-list-wrapper">
      {post.map((item) => (
        <Card className="item-card" onClick={(ev) => routeToPost(ev, item)} key={item._id}>
        <CardImg top width="20%" src={item.url} alt="Card image cap"  className="item-list-image" />
        <CardBody>
          <CardText>{item.title}</CardText>
        </CardBody>
      </Card>
      ))}
    </div>
  );
};


export default PostList;
