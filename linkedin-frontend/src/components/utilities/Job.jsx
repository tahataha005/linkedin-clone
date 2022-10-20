import React from "react";
import image from "../../assets/signup-hero.svg";
import "../../styles/job.css";
import sendRequest from "../../config/axios";
import Button from "../utilities/Button.jsx";

const Job = ({ job_id, job, company, location, work, applicants }) => {
    const apply = async () => {
        const data = {
            user_id: localStorage.getItem("id"),
            job_id: job_id,
        };
        const response = await sendRequest({
            route: `/user/apply`,
            data: data,
            method: "post",
        });
        console.log(response);
    };

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
            <Button
                type={"regular-btn"}
                text={"Apply"}
                onClick={() => apply()}
            />
        </div>
    );
};

export default Job;
