import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import API from "../api";
import { useFood } from "../hooks/useFoods";

const FoodPage = ({ foodId }) => {
    const history = useHistory();
    const { getFoodById } = useFood();
    const food = getFoodById(foodId);

    const handleClick = () => {
        history.push("/foods");
    };
    if (food) {
        return (
            <div className="d-flex container mt-5">
                <div className="_ibg border col-6 me-4 h-400px radius-40px">
                    <img
                        src={require(`../../img/categories/${food.imageUrl}.jpg`)}
                        alt=""
                    />
                </div>
                <div>
                    <h1 className="h1-page fs-1 mb-5"> {food.name}</h1>
                    {food.description && (
                        <div className="fs-4 mb-3">{`Описание: ${food.description}`}</div>
                    )}
                    <div className="mb-5" >
                        <span className="fs-4 me-3">Цена:</span>
                        <span className="text-danger fw-bold fs-1 me-1">
                            {food.price}.00
                        </span>
                        <span className="text-danger fw-bold fs-2">₽</span>
                    </div>

                    <button onClick={handleClick} className="btn btn-danger rounded-pill px-4 position-relative"> Вернуться в каталог</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="d-flex justify-content-center h-400px align-items-center">
                <div className="spinner-grow text-warning me-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning me-3" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
};
FoodPage.propTypes = {
    foodId: PropTypes.string.isRequired
};
export default FoodPage;
