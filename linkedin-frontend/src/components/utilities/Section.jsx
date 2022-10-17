import React from "react";

const Section = ({ children, width, styling }) => {
    const classes = `${styling} ${width}`;
    return <div className={classes}>{children}</div>;
};

export default Section;
