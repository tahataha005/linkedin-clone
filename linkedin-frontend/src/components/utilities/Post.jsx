import React from "react";
import "../../styles/utilities.css";
import image from "../../assets/signup-hero.svg";
import Account from "./Account";

const Post = ({ title, text }) => {
    return (
        <div className="post flex column round-edges border white-bg">
            <Account />
            <p className="text">{text}</p>

            <div className="image-container border">
                <img src={image} alt="image" className="post-image" />
            </div>
        </div>
    );
};

export default Post;
