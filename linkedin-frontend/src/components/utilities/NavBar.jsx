import React from "react";
import Button from "./Button";
import "../../styles/navbar.css";
import Input from "./Input";
import logo from "../../assets/LinkedIn_logo.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

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
                    navigate("/home");
                }}
            />
            <Button
                type={"nav-btn"}
                text={"Network"}
                onClick={() => {
                    navigate("/network");
                }}
            />
            <Button
                type={"nav-btn"}
                text={"Notifications"}
                onClick={() => {
                    navigate("/notifications");
                }}
            />
            <Button
                type={"nav-btn"}
                text={"Jobs"}
                onClick={() => {
                    navigate("/jobs");
                }}
            />
            <Button
                type={"nav-btn"}
                text={"Profile"}
                onClick={() => {
                    navigate("/profile");
                }}
            />
        </nav>
    );
};

export default NavBar;
