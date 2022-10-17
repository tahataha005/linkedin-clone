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
            route: "/user/post",
        });
        setPosts(posts);
    };

    useEffect(() => {
        getUser();
        getPosts();
    }, []);

    const [posts, setPosts] = useState();

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <div className="page-container flex">
            <Section width={"width-40"}>
                {posts?.map(post => {
                    return (
                        <Post
                            key={post.id}
                            user={post.user_id}
                            text={post.content}
                        />
                    );
                })}
            </Section>
        </div>
    );
};

export default Home;
