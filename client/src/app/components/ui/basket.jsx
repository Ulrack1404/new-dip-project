import React, { useState } from "react";
import {
    getBasket,
    removeItemBasket,
    getSummaryBasketCounter,
    getSummaryBasketPrice
} from "../../store/basket";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TableBasketData from "./tableBasketData";

const Basket = () => {
    const dispatch = useDispatch();
    const basCount = useSelector(getSummaryBasketCounter());
    const basPrice = useSelector(getSummaryBasketPrice());
    const foodsInBasket = useSelector(getBasket());
    const history = useHistory();

    function handleDelete(id) {
        dispatch(removeItemBasket(id));
    }

    const handleClick = () => {
        history.push("/foods");
    };

    const columns = {
        imageUrl: {
            path: "imageUrl",
            name: "Изображение"
        },
        name: {
            path: "name",
            name: "Наименование"
        },
        basketCounter: {
            path: "basketCounter",
            name: "Количество"
        },
        basketPrice: {
            path: "basketPrice",
            name: "Сумма, ₽"
        },
        deleteItem: {
            path: "basketPrice",
            name: "Удалить"
        }
    };

    if (foodsInBasket) {
        return (
            <div className="mt-5 mb-[300px]">
                {foodsInBasket.length !== 0 ? (
                    <div className="container mt-1 ">
                        <div className="d-flex w-75 text-gray-900 dark:text-white">
                            <div className="mb-5 w-50">
                                <div>
                                    <span className="fs-3 fw-bold me-5">
                                        Выбрано блюд:
                                    </span>
                                    <span className="fs-3 text-danger fw-bold">
                                        {basCount}
                                    </span>
                                </div>
                                <div>
                                    <span className="fs-3 fw-bold me-4">
                                        Итого к оплате:
                                    </span>
                                    <span className="fs-3 text-danger fw-bold">
                                        {`${basPrice}₽`}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-warning rounded-pill px-4">
                                    Перейти к оплате
                                </button>
                            </div>
                        </div>
                        <table className="table align-middle text-gray-900 dark:text-white">
                            <thead>
                                <tr>
                                    {Object.keys(columns).map((column) => (
                                        <th key={column} scope="col">
                                            {columns[column].name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {foodsInBasket.map((food) => (
                                    <tr key={food._id}>
                                        <TableBasketData
                                            food={food}
                                            columns={columns}
                                            handleDelete={handleDelete}
                                        />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-gray-900 dark:text-white">
                        <h1 className="text-center fs-1 my-5">Корзина пуста</h1>
                        <div className="text-center fs-1">
                            <i className="bi bi-cart-x"></i>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                onClick={handleClick}
                                className="btn btn-danger rounded-pill px-4 position-relative mt-5 text-center"
                            >
                                Вернуться в каталог
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
};
export default Basket;
