import React from "react";
import Job from "../utilities/Job.jsx";
import Section from "../utilities/Section.jsx";
const Jobs = () => {
    const jobs = [
        {
            id: 1,
            job: "software-engineering",
            company: "SE Factory",
            location: "Lebanon",
            work: "On Sight",
            applicants: 3,
        },
        {
            id: 2,
            job: "Technical Assistant",
            company: "SE Factory",
            location: "Lebanon",
            work: "On Sight/Online",
            applicants: 42,
        },
        {
            id: 3,
            job: "Communication Manager",
            company: "Ghandour",
            location: "Lebanon",
            work: "Online",
            applicants: 4,
        },
        {
            id: 4,
            job: "Human Resurces",
            company: "AUL",
            location: "Turkey",
            work: "On Sight",
            applicants: 12,
        },
    ];
    return (
        <div className="page-container flex">
            <Section
                width={"width-60"}
                styling={"section round-edges border white-bg"}
            >
                {jobs.map(job => {
                    return (
                        <Job
                            key={job.id}
                            job={job.job}
                            company={job.company}
                            location={job.location}
                            work={job.work}
                            applicants={job.applicants}
                        />
                    );
                })}
            </Section>
        </div>
    );
};

export default Jobs;
