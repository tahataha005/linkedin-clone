import React from "react";
import "../../styles/post.css";
import image from "../../assets/signup-hero.svg";
import Account from "./Account";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Post = ({ text, user }) => {
    const navigate = useNavigate();
    console.log(user);
    return (
        <div className="post flex column round-edges border white-bg">
            <Account
                name={user.email}
                description={user.field}
                profile_pic={"profile-img-container"}
            />
            <p className="text">{text}</p>

            <div className="image-container border">
                <img src={image} alt={image} className="image" />
            </div>
            <div className="post-buttons flex">
                <Button
                    type={"regular-btn"}
                    text={"View Profile"}
                    onClick={() => {
                        localStorage.setItem("clicked_id", user._id);
                        navigate("/profile");
                    }}
                />
            </div>
        </div>
    );
};

export default Post;
