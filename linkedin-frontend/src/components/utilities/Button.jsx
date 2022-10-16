import React from "react";
import "../../styles/button.css";

const Button = ({ type, text, onClick }) => {
    const classes = `btn round-edges light-txt ${type}`;
    return (
        <button onClick={onClick} className={classes}>
            {text}
        </button>
    );
};

export default Button;
