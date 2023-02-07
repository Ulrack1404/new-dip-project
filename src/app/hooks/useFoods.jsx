import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import foodService from "../services/food.service";

const FoodContext = React.createContext();

export const useFood = () => {
    return useContext(FoodContext);
};

const FoodProvider = ({ children }) => {
    const [foods, setFoods] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getFoods();
    }, []);
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);
    async function getFoods() {
        try {
            const { content } = await foodService.get();
            setFoods(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
        setLoading(false);
    }
    function getFoodById(userId) {
        return foods.find((f) => f._id === userId);
    }
    return (
        <FoodContext.Provider value={{ foods, getFoodById }}>
            {!isLoading ? children : "Loading..."}
        </FoodContext.Provider>
    );
};

FoodProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default FoodProvider;
