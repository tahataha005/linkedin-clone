import React from "react";
import "../../styles/input.css";

const Input = ({ placeholder, type, onChange, input_type = "text" }) => {
    const classes = `roundedges ${type}`;
    return (
        <input
            className={classes}
            type={input_type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;
