import React from "react";
import Button from "./Button";
import "../../styles/navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar white-bg flex">
            <Button type={"nav-btn"} text={"Home"} />
            <Button type={"nav-btn"} text={"Network"} />
            <Button type={"nav-btn"} text={"Notifications"} />
            <Button type={"nav-btn"} text={"Profile"} />
        </nav>
    );
};

export default NavBar;
