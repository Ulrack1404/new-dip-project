import React from "react";
import MainPage from "./mainPage";
import NavBar from "./navBar";

const Container = () => {
    return (
        <div className="container">
            <NavBar />
            <MainPage />
        </div>
    );
};

export default Container;
