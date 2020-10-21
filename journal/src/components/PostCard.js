import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from "reactstrap";

const PostCard = ({ url, title }) => {
  return (
    <div>
      <Card className="post-card">
        <CardImg top width="20%" src={url} alt="Card image cap" />
        <CardBody>
          <CardText>{title}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostCard;
