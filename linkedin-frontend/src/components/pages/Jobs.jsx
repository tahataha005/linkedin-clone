import React from "react";
import Job from "../utilities/Job.jsx";
import Section from "../utilities/Section.jsx";
import sendRequest from "../../config/axios.js";
import { useEffect, useState } from "react";
const Jobs = () => {
    const [jobs, setJobs] = useState();

    useEffect(() => {
        const getJobs = async () => {
            const response = await sendRequest({
                route: `/user/job`,
            });
            setJobs(response);
        };

        getJobs();
    }, []);

    useEffect(() => {
        console.log(jobs);
    }, [jobs]);

    return (
        <div className="page-container flex">
            <Section
                width={"width-40"}
                styling={"section round-edges border white-bg"}
            >
                {jobs?.map(job => {
                    return (
                        <Job
                            key={job._id}
                            job_id={job._id}
                            job={job.name}
                            company={job.company_id.email}
                            location={job.company_id.location}
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
