import React, { useEffect, useState } from "react";
import API from "../../api/index";

const LeftColumn = () => {
    const [categories, setCategories] = useState(API.categories.fetchAll());
    useEffect(() => {
        API.categories.fetchAll().then((data) => setCategories(data));
    }, []);

    if (categories) {
        return (
            <div className="border col-3 me-2">
                <div className="m-2">
                    {Object.entries(categories).map((category) => (
                        <p key={category[1]._id}>{category[1].name}</p>
                    ))}
                </div>
            </div>
        );
    }
    return "loading...";
};

export default LeftColumn;
