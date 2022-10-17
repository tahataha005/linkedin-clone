import React from "react";
import "../../styles/input.css";

const Input = ({ placeholder, type }) => {
    const classes = `roundedges ${type}`;
    return <input className={classes} type="text" placeholder={placeholder} />;
};

export default Input;
