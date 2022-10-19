import React from "react";
import "../../styles/auth.css";
import Input from "../utilities/Input";
import Section from "../utilities/Section";
import Button from "../utilities/Button";
import image from "../../assets/signup-hero.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sendRequest from "../../config/axios.js";

const Auth = () => {
    const [signup, setSignup] = useState(true);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    const login = async (email, password) => {
        const data = { email: email, password: password };
        const response = await sendRequest({
            method: "post",
            data: data,
            route: "/auth/login",
        });
        return response;
    };

    return (
        <div className="page-container white-bg flex">
            {signup ? (
                <div className="signup-container flex row wrap">
                    <Section width={"width-50"} styling={"min-width-500"}>
                        <div className="content flex">
                            <div className="signup-block">
                                <p className="landing-title">
                                    Join the biggest professional community
                                </p>
                                <div className="signup-inputs-container flex column">
                                    <Input
                                        type={"auth-input border"}
                                        placeholder={"Email"}
                                    />
                                    <Input
                                        type={"auth-input border"}
                                        placeholder={"Password"}
                                        input_type={"password"}
                                    />

                                    <Button
                                        type={"auth-button dark-bg white-txt"}
                                        text={"SIGN IN"}
                                    />
                                </div>

                                <div className="auth-switch-container flex row">
                                    <p>Already have an account?</p>
                                    <Button
                                        type={
                                            "auth-switch-button blue-txt white-bg"
                                        }
                                        text={"Sign In"}
                                        onClick={() => setSignup(!signup)}
                                    />
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section width={"width-50"} styling={"white-bg"}>
                        <div className="content">
                            <img
                                className="hero-image"
                                src={image}
                                alt={image}
                            />
                        </div>
                    </Section>
                </div>
            ) : (
                <Section width={"width-25"}>
                    <div className="content flex">
                        <div className="login-block border round-edges flex column">
                            <p className="auth-title">Sign In</p>
                            <p>Stay updated on your professional world</p>
                            <div className="login-inputs-container flex column">
                                <Input
                                    type={"auth-input border"}
                                    placeholder={"Email"}
                                    onChange={e => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <Input
                                    type={"auth-input border"}
                                    placeholder={"Password"}
                                    onChange={e => {
                                        setPassword(e.target.value);
                                    }}
                                    input_type={"password"}
                                />
                                <p className="red-text">{error ? error : ""}</p>
                            </div>
                            <Button
                                type={"auth-button dark-bg white-txt"}
                                text={"Sign In"}
                                onClick={async () => {
                                    try {
                                        const user = await login(
                                            email,
                                            password
                                        );
                                        localStorage.clear();
                                        localStorage.setItem(
                                            "token",
                                            user.token
                                        );
                                        localStorage.setItem(
                                            "id",
                                            user.user._id
                                        );
                                        setError();
                                        navigate("/home");
                                    } catch (error) {
                                        console.log(error.response.data);
                                        setError(error.response.data);
                                    }
                                }}
                            />
                            <div className="auth-switch-container flex row">
                                <p>Don't have an account?</p>
                                <Button
                                    type={
                                        "auth-switch-button blue-txt white-bg"
                                    }
                                    text={"Sign Up"}
                                    onClick={() => setSignup(!signup)}
                                />
                            </div>
                        </div>
                    </div>
                </Section>
            )}
        </div>
    );
};

export default Auth;
