import React from "react";
import ToysList from "./toysList";

const RightColumn = () => {
    return (
        <div className="border flex-grow-1">
            <ToysList />
        </div>
    );
};

export default RightColumn;
