import React from "react";
import Post from "../utilities/Post";
import Section from "../utilities/Section";

const Landing = () => {
    return (
        <div className="page-container flex">
            <Section width={"width-40"}>
                <Post title={"First Title"} text={"text text text text"} />
            </Section>
        </div>
    );
};

export default Landing;
