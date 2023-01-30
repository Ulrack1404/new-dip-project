import React from "react";
import PropTypes from "prop-types";

const ToyPrev = ({ _id, name, category, price, imageUrl }) => {
    return (
        <div className="border d-flex m-2">
            <div className="_ibg border m-2 col-3">
                <img
                    // src="../../../img/animals/1.jpg"
                    src="https://img3.akspic.ru/attachments/crops/0/0/6/2600/2600-pejzazhi-priroda-dolina-gornaya_derevnya-nagore-3840x2160.jpg"
                    alt="q"
                />
            </div>
            <div className="border m-1 flex-grow-1">
                <h2 className="title_prev">{name}</h2>
                <p className="id">{_id}</p>
                <p className="category">{category.name}</p>
                <p>{price} р.</p>
                <p> <button>Добавить в корзину</button></p>
            </div>
        </div>
    );
};

ToyPrev.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.object,
    price: PropTypes.number,
    imageUrl: PropTypes.string
};

export default ToyPrev;
