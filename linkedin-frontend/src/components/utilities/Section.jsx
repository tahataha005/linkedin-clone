import React from "react";

const Section = ({ children, width, style }) => {
    const classes = `${style} ${width}`;
    return <div className={classes}>{children}</div>;
};

export default Section;
