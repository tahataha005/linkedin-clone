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
            <Button
                type={"nav-btn"}
                text={"Home"}
                onClick={() => {
                    window.location = "/";
                }}
            />
            <Button
                type={"nav-btn"}
                text={"Network"}
                onClick={() => {
                    window.location = "/network";
                }}
            />
            <Button
                type={"nav-btn"}
                text={"Notifications"}
                onClick={() => {
                    window.location = "/notifications";
                }}
            />
            <Button
                type={"nav-btn"}
                text={"Jobs"}
                onClick={() => {
                    window.location = "/jobs";
                }}
            />
            <Button
                type={"nav-btn"}
                text={"Profile"}
                onClick={() => {
                    window.location = "/profile";
                }}
            />
        </nav>
    );
};

export default NavBar;
