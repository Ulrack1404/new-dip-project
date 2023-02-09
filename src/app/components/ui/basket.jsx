import React from "react";
import {
    getBasket,
    removeItemBasket,
    getSummaryBasketCounter,
    getSummaryBasketPrice
} from "../../store/basket";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
            <div>
                {foodsInBasket.length !== 0 ? (
                    <div className="container mt-1">
                        <div className="d-flex w-75">
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
                        <table className="table align-middle">
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
                                {foodsInBasket.map((item) => (
                                    <tr key={item._id}>
                                        {Object.keys(columns).map((column) => (
                                            <td key={column}>
                                                {!item[column] ? (
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                item._id
                                                            )
                                                        }
                                                        className="btn btn-danger rounded-pill px-4"
                                                    >
                                                        Удалить
                                                    </button>
                                                ) : item[column] ===
                                                  item.imageUrl ? (
                                                    <div
                                                        key={item}
                                                        className="_ibg img-prev-radius m-2 col-3 p-5"
                                                    >
                                                        <img
                                                            src={require(`../../../img/categories/${item.imageUrl}.jpg`)}
                                                            alt=""
                                                        />
                                                    </div>
                                                ) : (
                                                    <span className="fs-5">
                                                        {" "}
                                                        {item[column]}
                                                    </span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-center fs-1 my-5">Корзина пуста</h1>
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