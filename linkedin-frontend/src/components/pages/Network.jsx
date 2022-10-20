import React from "react";
import Section from "../../components/utilities/Section.jsx";
import Account from "../../components/utilities/Account.jsx";
import sendRequest from "../../config/axios.js";
import { useEffect, useState } from "react";

const Network = () => {
    const [followed, setFollowed] = useState();

    useEffect(() => {
        const getFollowing = async () => {
            const response = await sendRequest({
                route: `/user/follow/${localStorage.getItem("id")}`,
            });
            setFollowed(response);
        };

        getFollowing();
    }, []);

    return (
        <div className="page-container flex">
            <Section
                width={"width-60"}
                styling={"section round-edges border white-bg"}
            >
                {followed?.map(company => {
                    return (
                        <Account
                            key={company.company_id._id}
                            name={company.company_id.email}
                            description={company.company_id.field}
                            styling={"account-border"}
                            profile_pic={"profile-img-container"}
                        />
                    );
                })}
            </Section>
        </div>
    );
};

export default Network;
