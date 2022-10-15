import React from "react";
import Button from "./Button";
import "../../styles/navbar.css";
import Input from "./Input";
import logo from "../../assets/LinkedIn_logo.png";

const NavBar = () => {
    return (
        <nav className="navbar white-bg flex">
            <div className="search-div flex">
                <div className="logo flex">
                    <img src={logo} alt="" className="flex" />
                </div>
                <Input
                    type={"search-input light-bg"}
                    placeholder={"Search..."}
                />
            </div>
            <Button type={"nav-btn"} text={"Home"} />
            <Button type={"nav-btn"} text={"Network"} />
            <Button type={"nav-btn"} text={"Notifications"} />
            <Button type={"nav-btn"} text={"Profile"} />
        </nav>
    );
};

export default NavBar;
