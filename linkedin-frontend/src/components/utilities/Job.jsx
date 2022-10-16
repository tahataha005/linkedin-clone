import React from "react";
import image from "../../assets/signup-hero.svg";
import "../../styles/job.css";

const Job = () => {
    return (
        <div className="job-container flex">
            <div className="profile-img-container">
                <img src={image} alt="" />
            </div>
            <div className="job-info flex column">
                <p className="title blue-txt">Job Name</p>
                <p className="text">Company name</p>
                <p className="text light-txt">Work</p>
            </div>
        </div>
    );
};

export default Job;
