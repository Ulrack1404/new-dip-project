import React from "react";
import { useParams } from "react-router-dom";
import FoodPage from "../../layouts/foodPage";
import FoodsList from "./foodsList";

const Foods = () => {
    const params = useParams();
    const { foodId } = params;
    return <>{foodId ? <FoodPage foodId={foodId} /> : <FoodsList />}</>;
};

export default Foods;
