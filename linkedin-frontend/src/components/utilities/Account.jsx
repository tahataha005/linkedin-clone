import React from "react";
import "../../styles/account.css";
import image from "../../assets/signup-hero.svg";

const Account = ({
    /*image,*/ name,
    description,
    styling,
    profile_pic,
    font,
}) => {
    const classes = `account-container flex ${styling} `;
    const image_classes = `white-bg eclipse ${profile_pic}`;
    const title = `title ${font}`;
    const text = `text ${font}`;
    return (
        <div className={classes}>
            <div className={image_classes}>
                <img src={image} alt="" className="eclipse" />
            </div>
            <div className="profile-info-container flex column">
                <p className={title}>{name}</p>
                <p className={text}>{description}</p>
            </div>
        </div>
    );
};

export default Account;
