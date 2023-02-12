import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById } from "../../store/categories";
import { Link } from "react-router-dom";
import { removeFood } from "../../store/foods";

const TableData = ({ food, columns }) => {
    const dispatch = useDispatch();
    const getCategory = useSelector(getCategoryById(food.category));

    const handleRemoveFood = (id) => {
        dispatch(removeFood(id));
    };

    return Object.keys(columns).map((column) => {
        return (
            <td key={column}>
                {food[column] === food.imageUrl ? (
                    <div
                        key={food}
                        className="_ibg img-prev-radius m-2 col-3 p-5"
                    >
                        <img
                            src={require(`../../../img/categories/${food.imageUrl}.jpg`)}
                            alt=""
                        />
                    </div>
                ) : food[column] === food.category ? (
                    getCategory.name
                ) : column === "editItem" ? (
                    <Link to={`/edit/${food._id}`}>
                        <button className="btn btn-success rounded">
                            <i className="bi bi-pencil-square"></i>
                        </button>
                    </Link>
                ) : column === "deleteItem" ? (
                    <button
                        className="btn btn-danger rounded"
                        onClick={() => handleRemoveFood(food._id)}
                    >
                        <i className="bi bi-trash"></i>
                    </button>
                ) : (
                    food[column]
                )}
            </td>
        );
    });
};
TableData.propTypes = {
    food: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};
export default TableData;
