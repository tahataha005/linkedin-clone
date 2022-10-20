import React from "react";
import Section from "../utilities/Section";
import Input from "../utilities/Input";
import Button from "../utilities/Button";
import image from "../../assets/signup-hero.svg";

const Login = ({ signup, setSignup }) => {
    return (
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
                                type={"auth-switch-button blue-txt white-bg"}
                                text={"Sign In"}
                                onClick={() => setSignup(!signup)}
                            />
                        </div>
                    </div>
                </div>
            </Section>
            <Section width={"width-50"} styling={"white-bg"}>
                <div className="content">
                    <img className="hero-image" src={image} alt={image} />
                </div>
            </Section>
        </div>
    );
};

export default Login;
