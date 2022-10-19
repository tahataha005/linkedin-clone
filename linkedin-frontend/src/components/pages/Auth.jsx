import React from "react";
import "../../styles/auth.css";
import Input from "../utilities/Input";
import Section from "../utilities/Section";
import Button from "../utilities/Button";

const Auth = () => {
    return (
        <div className="page-container white-bg flex row">
            <Section width={"width-50"} styling={"white-bg"}>
                <div className="right-content flex">
                    <div className="auth-block">
                        <p className="landing-title">
                            Join the biggest professional community
                        </p>
                        <div className="auth-inputs-container flex column">
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
                            text={"SIGN IN"}
                        />
                        <div className="auth-switch-container flex row">
                            <p>Already have an account?</p>
                            <Button
                                type={"auth-switch-button blue-txt white-bg"}
                                text={"Sign Up"}
                            />
                        </div>
                    </div>
                </div>
            </Section>
            <Section width={"width-50"} styling={"white-bg"}>
                <div>
                    <img src="" alt="" />
                </div>
            </Section>
        </div>
    );
};

export default Auth;
