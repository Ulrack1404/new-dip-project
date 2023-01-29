import React from "react";
import LeftColumn from "./leftColumn";
import RightColumn from "./rightColumn";

const MainPage = () => {
    return <div className="d-flex">
        <LeftColumn/>
        <RightColumn/>
    </div>;
};

export default MainPage;
