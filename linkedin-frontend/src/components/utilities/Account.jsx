import React from "react";
import image from "../../assets/signup-hero.svg";

const Account = ({ /*image,*/ name, description }) => {
    return (
        <div className="account-container flex">
            <div className="profile-img-container white-bg eclipse">
                <img src={image} alt="" className="eclipse" />
            </div>
            <div className="profile-info-container flex column">
                <p className="title">{"name"}</p>
                <p className="text">{"description"}</p>
            </div>
        </div>
    );
};

export default Account;
