import React, {useContext} from "react";
import {Route, NavLink, useHistory} from "react-router-dom";
import { PostContext } from "../contexts/PostContext";
import axios from "axios";

const Post = (props) => {
    const [post, setPost] = useContext(PostContext);
    const history = useHistory();
    // const item = props.items.find(
    //     (thing) => `${thing.id}` === props.match.params.id
    // );

    // if (!props.items.length || !item) {
    //     return <h2>Loading Post Data...</h2>
    // }

    console.log('props', props)
    console.log('post', post)

    const handleDelete = (e) => {
        e.preventDefault();

        axios.delete().then((res) => console.log(res)).catch((error) => console.log(error))
    }

    return(
    <div>
        <div className="item-wrapper">
            <div className="item-header">
                <div className="image-wrapper">
                {/* // add image */}
                    <img sr={post.url} alt="picture" /> 
                </div>
                <div className="item-title-wrapper">
                    {/* add title */}
                    <h2>{post.title}</h2>
                </div>
            </div>
        </div>


        {/* Navbar */}

        <nav className="item-sub-nav">
            <NavLink exact to={`/post-list/${post.id}`}>
                Story
            </NavLink>
        </nav>

        {/* Route */}

        <Route exact path="/post-list:id" />

        {/* Buttons */}

        <button
        onClick={() => history.push(`/update-post/${post.id}`)}
        className="md-button"
        >Edit</button>

        <button className="md-button" onClick={handleDelete}>Delete</button>
    </div>)
}

export default Post;