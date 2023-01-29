import React, { useState } from "react";
import API from "../../api/index";
import ToyPrev from "./toyPrev";

const ToysList = () => {
    const [toys, setToys] = useState(API.toys.fetchAll());

    return (
        <div>
            {toys.map((toy) => {
                return <ToyPrev key={toy._id} {...toy} />;
            })}
        </div>
    );
};

export default ToysList;
