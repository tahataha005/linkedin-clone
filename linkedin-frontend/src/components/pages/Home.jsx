import React from "react";
import Post from "../utilities/Post";
import Section from "../utilities/Section";
import axios_functions from "../../config/axios";

const Home = async () => {
    const posts = await axios_functions.getAPI(
        "/user/634ced20f805eea4fea92bd3"
    );

    console.log(posts);

    const feed = [
        {
            id: 1,
            text: "some random text",
            user: { name: "taha", description: "educator" },
        },
        {
            id: 2,
            text: "some random text",
            user: { name: "mohammad", description: "physio" },
        },
        {
            id: 3,
            text: "this is a post",
            user: { name: "khaled", description: "Technical Assistant" },
        },
    ];

    return (
        <div className="page-container flex">
            <Section width={"width-40"}>
                {feed.map(post => {
                    return (
                        <Post key={post.id} user={post.user} text={post.text} />
                    );
                })}
            </Section>
        </div>
    );
};

export default Home;
