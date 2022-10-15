import React from "react";
import "../../styles/post.css";
import image from "../../assets/signup-hero.svg";
import Account from "./Account";
import Button from "./Button";

const Post = ({ text }) => {
    return (
        <div className="post flex column round-edges border white-bg">
            <Account />
            <p className="text">{text}</p>

            <div className="image-container border">
                <img src={image} alt="image" className="post-image" />
            </div>
            <div className="post-buttons flex">
                <Button type={"regular-btn"} text={"View"} />
            </div>
        </div>
    );
};

export default Post;
