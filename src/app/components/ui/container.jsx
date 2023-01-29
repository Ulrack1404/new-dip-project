import React from "react";
import MainPage from "./mainPage";
import NavBar from "./navBar";
import Search from "./search";

const Container = () => {
    return (
        <div className="container">
            <NavBar />
            <Search />
            <MainPage />
        </div>
    );
};

export default Container;
