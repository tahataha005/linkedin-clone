import React from "react";
import Post from "../utilities/Post";
import Section from "../utilities/Section";
import { useState, useEffect } from "react";
import sendRequest from "../../config/axios";

const Home = () => {
    const getPosts = async () => {
        const posts = await sendRequest({
            route: "/user/post",
        });
        setPosts(posts);
    };

    useEffect(() => {
        getPosts();
    }, []);

    const [posts, setPosts] = useState();

    return (
        <div className="page-container flex">
            <Section width={"width-40"}>
                {posts?.map(post => {
                    console.log("post ", post);
                    return (
                        <Post
                            key={post._id}

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
