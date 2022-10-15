import React from "react";

const Section = ({ children, width }) => {
    return <div className={width}>{children}</div>;
};

export default Section;
