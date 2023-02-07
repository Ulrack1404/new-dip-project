import React from "react";
import { useParams } from "react-router-dom";
import FoodProvider from "../../hooks/useFoods";
import FoodPage from "../../layouts/foodPage";
import FoodsList from "./foodsList";

const Foods = () => {
    const params = useParams();
    const { foodId } = params;
    return (
        <>
            <FoodProvider>
                {foodId ? <FoodPage foodId={foodId} /> : <FoodsList />}
            </FoodProvider>
        </>
    );
};

export default Foods;
