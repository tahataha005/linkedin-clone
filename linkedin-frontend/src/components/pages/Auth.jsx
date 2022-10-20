import React from "react";
import "../../styles/auth.css";
import { useState } from "react";
import sendRequest from "../../config/axios.js";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
    const [signup, setSignup] = useState(true);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

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
                <Login signup={signup} setSignup={setSignup} />
            ) : (
                <Signup
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    error={error}
                    setError={setError}
                    signup={signup}
                    setSignup={setSignup}
                    login={login}
                />
            )}
        </div>
    );
};

export default Auth;
