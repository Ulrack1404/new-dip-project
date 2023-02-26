import React from "react";
import PropTypes from "prop-types";
import FoodPrev from "./foodPrev";

const FoodsContent = ({ foods, onSort, selectedSort }) => {
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
    const renderSortArrow1 = (selectedSort) => {
        if (selectedSort.path === "price") {
            return (
                <span className="ms-1">
                    {selectedSort.order === "asc" ? (
                        <i className="bi bi-chevron-down"></i>
                    ) : (
                        <i className="bi bi-chevron-up"></i>
                    )}
                </span>
            );
        }
    };

    const renderSortArrow2 = (selectedSort) => {
        if (selectedSort.path === "name") {
            return (
                <span className="ms-1">
                    {selectedSort.order === "asc" ? (
                        <i className="bi bi-chevron-down"></i>
                    ) : (
                        <i className="bi bi-chevron-up"></i>
                    )}
                </span>
            );
        }
    };

    return (
        <div className="d-flex flex-column border flex-grow-1">
            <div>
                <button
                    onClick={handleSort1}
                    className="btn btn-danger castom-btn-orange m-1 rounded-pill"
                >
                    Сортировать по цене {renderSortArrow1(selectedSort)}
                    {/* <span className="ms-1">
                        {selectedSort.order === "asc" ? (
                            <i className="bi bi-chevron-down"></i>
                        ) : (
                            <i className="bi bi-chevron-up"></i>
                        )}
                    </span> */}
                </button>
                <button
                    onClick={handleSort2}
                    className="btn btn-danger castom-btn-orange m-1 rounded-pill"
                >
                    Сортировать по названию {renderSortArrow2(selectedSort)}
                </button>
            </div>
            <div>
                {foods.map((food) => {
                    return <FoodPrev key={food._id} {...food} />;
                })}
            </div>
        </div>
    );
};

FoodsContent.propTypes = {
    foods: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default FoodsContent;
