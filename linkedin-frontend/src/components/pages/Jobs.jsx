import React from "react";
import Job from "../utilities/Job.jsx";
import Section from "../utilities/Section.jsx";
const Jobs = () => {
    return (
        <div className="page-container flex">
            <Section
                width={"width-60"}
                styling={"section round-edges border white-bg"}
            >
                <Job />
            </Section>
        </div>
    );
};

export default Jobs;
