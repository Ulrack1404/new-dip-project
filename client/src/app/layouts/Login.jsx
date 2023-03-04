import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const toggleFormType = (params) => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };
    return (
        <div className="bg-image-login">
            <div className="w-1/3 mx-auto pt-20 pb-40">
                <div className="row  bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-2xl">
                    <div className="  shadow p-4 ">
                        {formType === "register" ? (
                            <>
                                <h3 className="mb-5 fs-1 fw-bold text-center text-red-500 dark:text-red-300 ">
                                    Register
                                </h3>
                                <RegisterForm />
                                <p>
                                    Already have account?
                                    <a role="button" onClick={toggleFormType}>
                                        Sign In
                                    </a>
                                </p>
                            </>
                        ) : (
                            <>
                                <h3 className="mb-5 fs-1 fw-bold text-center text-red-500 dark:text-red-300">
                                    Login
                                </h3>
                                <LoginForm />
                                <p>
                                    Dont have account?
                                    <a role="button" onClick={toggleFormType}>
                                        Sign Up
                                    </a>
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
