import React from "react";
import PropTypes from "prop-types";
import ToyPrev from "./toyPrev";

const ToysList = ({ toys, onSort, selectedSort }) => {
    const handleSort1 = () => {
        onSort({
            ...selectedSort,
            path: "price",
            order: selectedSort.order === "asc" ? "desc" : "asc"
        });
    };
    const handleSort2 = () => {
        onSort({
            ...selectedSort,
            path: "name",
            order: selectedSort.order === "asc" ? "desc" : "asc"
        });
    };

    return (
        <div className="d-flex flex-column border flex-grow-1">
            <div>
                <button onClick={handleSort1} className="btn btn-primary m-1">
                    Сортировать по цене
                </button>
                <button onClick={handleSort2} className="btn btn-primary m-1">
                    Сортировать по названию
                </button>
            </div>
            <div>
                {toys.map((toy) => {
                    return <ToyPrev key={toy._id} {...toy} />;
                })}
            </div>
        </div>
    );
};

ToysList.propTypes = {
    toys: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default ToysList;
