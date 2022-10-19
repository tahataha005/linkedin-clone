import React from "react";
import "../../styles/auth.css";
import Input from "../utilities/Input";
import Section from "../utilities/Section";
import Button from "../utilities/Button";
import image from "../../assets/signup-hero.svg";
import { useState } from "react";

const Auth = () => {
    const [signup, setSignup] = useState(true);
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
                                />
                                <Input
                                    type={"auth-input border"}
                                    placeholder={"Password"}
                                />
                            </div>
                            <Button
                                type={"auth-button dark-bg white-txt"}
                                text={"Sign In"}
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
