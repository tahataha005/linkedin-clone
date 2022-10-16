import React from "react";
import Section from "../../components/utilities/Section.jsx";
import Account from "../../components/utilities/Account.jsx";

const Network = () => {
    const followed = [
        { id: 1, name: "SE Factory", description: "Software Development" },
        { id: 2, name: "Taha's Company", description: "Education and Stuff" },
        { id: 3, name: "Company", description: "Description Example" },
        {
            id: 4,
            name: "Ghandour",
            description: "Lebanese Company of Biscuits",
        },
    ];
    return (
        <div className="page-container flex">
            <Section width={"width-60"} styling={"section white-bg"}>
                {followed.map(company => {
                    return (
                        <Account
                            name={company.name}
                            description={company.description}
                            border={"account-border"}
                        />
                    );
                })}
            </Section>
        </div>
    );
};

export default Network;
