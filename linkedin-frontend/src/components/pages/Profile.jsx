import React from "react";
import Section from "../utilities/Section";
import Account from "../utilities/Account";
import { useState, useEffect } from "react";
import sendRequest from "../../config/axios";

const Profile = () => {
    const [user, setUser] = useState();

    const getUser = async () => {
        const user = await sendRequest({
            route: `/user/${localStorage.getItem("id")}`,
        });
        setUser(user);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="page-container flex">
            <Section
                width={"width-60"}
                styling={"section round-edges border white-bg"}
            >
                <div className="background dark-bg fixed "></div>
                {user && (
                    <Account
                        name={user.email}
                        description={user.field}
                        styling={"column"}
                        profile_pic={"big-pic"}
                        font={"size-30"}
                    />
                )}
            </Section>
        </div>
    );
};

export default Profile;
