import React from "react";
import PropTypes from "prop-types";

const ToyPrev = ({ _id, name, category, price, imageUrl }) => {
    return <div className="border d-flex m-2">
        <div className="border m-1 col-3" >img</div>
        <div className="border m-1 flex-grow-1">text</div>
    </div>;
};

ToyPrev.propTypes = {
    _id: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.object,
    price: PropTypes.number,
    imageUrl: PropTypes.string
};

export default ToyPrev;
