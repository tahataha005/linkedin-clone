import React from "react";
import Input from "../utilities/Input";
import Section from "../utilities/Section";
import Button from "../utilities/Button";

const Auth = () => {
    return (
        <div className="page-container white-bg flex row">
            <Section width={"width-50"} styling={"white-bg"}>
                <div>
                    <p>Join the biggest professional community</p>
                    <div>
                        <Input />
                        <Input />
                    </div>
                    <Button />
                    <div>
                        <p>Already have an account?</p>
                        <Button />
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
