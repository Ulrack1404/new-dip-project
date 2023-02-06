import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import API from "../api";

const FoodPage = ({ foodId }) => {
    const history = useHistory();
    const [food, setFood] = useState();
    useEffect(() => {
        API.foods.getById(foodId).then((data) => setFood(data));
    }, []);
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
                    <h1 className="h1-page"> {food.name}</h1>
                    {food.description && (
                        <div>{`Описание: ${food.description}`}</div>
                    )}
                    <div>
                        Цена: <span>{food.price}.00</span> ₽
                    </div>

                    <button onClick={handleClick}> Все Пользователи</button>
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
