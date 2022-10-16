import React from "react";
import image from "../../assets/signup-hero.svg";
import "../../styles/job.css";

const Job = ({ job, company, location, work, applicants }) => {
    return (
        <div className="job-container flex">
            <div className="profile-img-container">
                <img src={image} alt="" />
            </div>
            <div className="job-info flex column">
                <p className="title blue-txt">{job}</p>
                <p className="text">{company}</p>
                <p className="text light-txt">{`${location} (${work})`}</p>
                <p className="text light-txt">{`Applicants: ${applicants}`}</p>
            </div>
        </div>
    );
};

export default Job;
