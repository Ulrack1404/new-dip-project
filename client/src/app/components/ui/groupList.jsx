import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    if (!Array.isArray(items)) {
        return (
            <div className="d-flex flex-wrap justify-content-around">
                {Object.keys(items).map((item) => (
                    <div
                        key={items[item][valueProperty]}
                        className={
                            "col-5 mb-2 me-2" +
                            (items[item] === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemSelect(items[item])}
                        role="button"
                    >
                        <div className="_ibg col-3 min-h-100 w-100 categories">
                            <img
                                src={require(`../../../img/categories/${items[item].imageUrl}.jpg`)}
                                alt=""
                            />
                        </div>
                        <div className="ps-2 bg-red color-w radius-text">
                            {items[item][contentProperty]}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {items.map((item) => (
                <div
                    key={item[valueProperty]}
                    className={
                        "col-5 mb-2 me-2" +
                        (item === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(item)}
                    role="button"
                >
                    <div className="_ibg col-3 min-h-100 w-100 categories">
                        <img
                            src={require(`../../../img/categories/${item.imageUrl}.jpg`)}
                            alt=""
                        />
                    </div>
                    <div className="ps-2 bg-red color-w radius-text">
                        {item[contentProperty]}
                    </div>
                </div>
            ))}
        </div>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object,
    imageUrl: PropTypes.string
};

export default GroupList;
