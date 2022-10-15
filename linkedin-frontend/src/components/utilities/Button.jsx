import React from "react";
import "../../styles/button.css";

const Button = ({ type, text }) => {
    const classes = `btn round-edges light-txt ${type}`;
    return <button className={classes}>{text}</button>;
};

export default Button;
