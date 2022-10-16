import React from "react";
import Section from "../utilities/Section";
import Account from "../utilities/Account";

const Profile = () => {
    return (
        <div className="page-container flex">
            <Section
                width={"width-60"}
                styling={"section round-edges border white-bg"}
            >
                <div className="background dark-bg fixed "></div>
                <Account
                    name={"taha"}
                    description={"description"}
                    styling={"column"}
                    profile_pic={"big-pic"}
                    font={"size-30"}
                />
            </Section>
        </div>
    );
};

export default Profile;
