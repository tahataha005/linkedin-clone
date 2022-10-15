import React from "react";
import "../../styles/account.css";
import image from "../../assets/signup-hero.svg";

const Account = ({ /*image,*/ name, description, border }) => {
    const classes = `account-container flex ${border}`;
    return (
        <div className={classes}>
            <div className="profile-img-container white-bg eclipse">
                <img src={image} alt="" className="eclipse" />
            </div>
            <div className="profile-info-container flex column">
                <p className="title">{name}</p>
                <p className="text">{description}</p>
            </div>
        </div>
    );
};

export default Account;
