import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/common/loader/loader";
import { getFoodById } from "../store/foods";
import {
    createBasItem,
    getBasketItemById,
    addCountBasket
} from "../store/basket";

const FoodPage = ({ foodId }) => {
    const dispatch = useDispatch();
    const [isInBasket, setInBasket] = useState(false);

    const history = useHistory();
    const food = useSelector(getFoodById(foodId));
    const basketItem = useSelector(getBasketItemById(foodId));

    const [counter, setCounter] = useState(1);

    const handleIncrement = () => {
        setCounter((prevState) => (prevState += 1));
    };
    const handleDecrement = () => {
        if (counter > 1) {
            setCounter((prevState) => (prevState -= 1));
        }
    };

    const addToBasket = () => {
        if (!basketItem) {
            dispatch(
                createBasItem({
                    ...food,
                    basketCounter: counter,
                    basketPrice: counter * food.price
                })
            );
        }
    };

    function inBasket() {
        addToBasket();
        setInBasket(true);
    }

    const handleClick = () => {
        history.push("/foods");
    };
    if (food) {
        return (
            <div className="d-flex container mt-5 mb-[200px]">
                <div className="_ibg border col-6 me-4 h-400px radius-40px">
                    <img
                        src={require(`../../img/categories/${food.imageUrl}.jpg`)}
                        alt=""
                    />
                </div>
                <div>
                    <h1 className="h1-page fs-1 mb-5 text-gray-900 dark:text-white"> {food.name}</h1>
                    {food.description && (
                        <div className="fs-4 mb-3 text-gray-900 dark:text-white">{`Описание: ${food.description}`}</div>
                    )}
                    <div className="mb-5">
                        <span className="fs-4 me-3 text-gray-900 dark:text-white">Цена:</span>
                        <span className="text-red-500 dark:text-red-300 fw-bold fs-1 me-1">
                            {food.price}.00
                        </span>
                        <span className="text-red-500 dark:text-red-300 fw-bold fs-2">₽</span>
                    </div>
                    {/* ********** счетчик ********* */}
                    <div className="d-flex">
                        <div className="d-flex mb-5 justify-content-between w-75 text-gray-900 dark:text-white">
                            <div>
                                <button
                                    className="btn fs-2 me-4 text-gray-900 dark:text-white"
                                    onClick={handleIncrement}
                                >
                                    +
                                </button>
                            </div>
                            <div className="fs-3 border px-5 rounded-pill me-4 ">
                                {counter}
                            </div>
                            <div>
                                <button
                                    className="btn  fs-2 text-gray-900 dark:text-white"
                                    onClick={handleDecrement}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                        <div className="w-25"></div>
                    </div>
                    <div>
                        {!isInBasket ? (
                            <button
                                className="btn btn-warning rounded-pill px-4 me-4"
                                onClick={inBasket}
                            >
                                В корзину
                            </button>
                        ) : (
                            <button
                                className="btn btn-success rounded-pill px-4 me-4"
                                disabled={true}
                            >
                                Добавлено
                            </button>
                        )}

                        <button
                            onClick={handleClick}
                            className="btn btn-danger rounded-pill px-4 position-relative "
                        >
                            Вернуться в каталог
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Loader />;
    }
};
FoodPage.propTypes = {
    foodId: PropTypes.string.isRequired
};
export default FoodPage;
