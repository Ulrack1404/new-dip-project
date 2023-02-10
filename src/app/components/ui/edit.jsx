import React from "react";
import { useParams } from "react-router-dom";
import EditFoodPage from "./editFoodPage";
import EditFoods from "./editFoods";

const Edit = () => {
    const params = useParams();
    const { foodId } = params;

    return <>{foodId ? <EditFoodPage foodId={foodId} /> : <EditFoods />}</>;
};

export default Edit;
