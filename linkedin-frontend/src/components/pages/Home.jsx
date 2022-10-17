import React from "react";
import Post from "../utilities/Post";
import Section from "../utilities/Section";
import { useState } from "react";
import { useEffect } from "react";
import sendRequest from "../../config/axios";

const Home = () => {
    const [user, setUser] = useState();

    const getUser = async () => {
        const user = await sendRequest({
            route: "/user/634ced20f805eea4fea92bd3",
        });
        setUser(user);
    };

    const getPosts = async () => {
        const posts = await sendRequest({
            route: "/post",
        });
    };

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        console.log(user);
    }, [user]);

    const [posts, setPosts] = useState([
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
    ]);

    return (
        <div className="page-container flex">
            <Section width={"width-40"}>
                {posts.map(post => {
                    return (
                        <Post
                            key={post.id}
                            user={post.user}
                            text={post.content}
                        />
                    );
                })}
            </Section>
        </div>
    );
};

export default Home;
