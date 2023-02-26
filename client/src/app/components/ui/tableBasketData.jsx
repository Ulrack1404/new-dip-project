import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCountBasket, getBasketItemById } from "../../store/basket";

const TableBasketData = ({ food, columns, handleDelete }) => {
    const dispatch = useDispatch();
    const basketItem = useSelector(getBasketItemById(food._id));

    const [counter, setCounter] = useState(basketItem.basketCounter);

    useEffect(() => {
        dispatch(addCountBasket(food._id, counter));
    }, [counter]);

    const handleIncrement = (id) => {
        setCounter((prevState) => (prevState += 1));
    };

    const handleDecrement = (id) => {
        if (counter > 1) {
            setCounter((prevState) => (prevState -= 1));
        }
    };

    return Object.keys(columns).map((column) => {
        return (
            <td key={column}>
                {!food[column] ? (
                    <button
                        onClick={() => handleDelete(food._id)}
                        className="btn btn-danger rounded-pill px-4"
                    >
                        Удалить
                    </button>
                ) : food[column] === food.imageUrl ? (
                    <div
                        key={food}
                        className="_ibg img-prev-radius m-2 col-3 p-5"
                    >
                        <img
                            src={require(`../../../img/categories/${food.imageUrl}.jpg`)}
                            alt=""
                        />
                    </div>
                ) : food[column] === food.basketCounter ? (
                    <div className="d-flex align-items-center">
                        <div>
                            <button
                                className="btn fs-5 me-2"
                                onClick={() => handleIncrement(food._id)}
                            >
                                +
                            </button>
                        </div>
                        <div className="fs-5 me-2">
                            {basketItem.basketCounter}
                        </div>
                        <div>
                            <button
                                className="btn fs-5"
                                onClick={() => handleDecrement(food._id)}
                            >
                                -
                            </button>
                        </div>
                    </div>
                ) : (
                    <span className="fs-5"> {food[column]}</span>
                )}
            </td>
        );
    });
};

export default TableBasketData;
