import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { getCategoryById } from "../../store/categories";

const FoodPrev = ({ _id, name, category, price, imageUrl }) => {
    const getCategory = useSelector(getCategoryById(category));
    return (
        <Link to={`/foods/${_id}`}>
            <div className="d-flex m-2 shadow-prev transition-prev">
                <div className="_ibg  img-prev-radius m-2 col-3">
                    <img
                        src={require(`../../../img/categories/${imageUrl}.jpg`)}
                        alt=""
                    />
                </div>
                <div className=" m-1 flex-grow-1">
                    <h2 className="fs-4 fw-bold">{name}</h2>
                    <p className="fs-3 text-danger">{price} р.</p>
                    <p className="fs-6 ">{getCategory.name}</p>
                    <p>
                        <button className="btn btn-warning color-w  rounded-pill px-4 position-relative">
                            Перейти для добавления в корзину
                        </button>
                    </p>
                </div>
            </div>
        </Link>
    );
};

FoodPrev.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string
};

export default FoodPrev;
