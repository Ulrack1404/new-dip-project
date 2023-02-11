import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, loadUsersList } from "../../../store/auth";

import { loadFoodsList, getFoodsLoadingStatus } from "../../../store/foods";
import {
    loadCategoriesList,
    getCategoriesLoadingStatus
} from "../../../store/categories";
import Loader from "../../common/loader/loader";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const foodsLoading = useSelector(getFoodsLoadingStatus());
    const categoriesLoading = useSelector(getCategoriesLoadingStatus());
    const isLoggedIn = useSelector(getIsLoggedIn());
    useEffect(() => {
        dispatch(loadFoodsList());
        dispatch(loadCategoriesList());
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
    }, [isLoggedIn]);

    if (foodsLoading && categoriesLoading) {
        return <Loader />;
    }
    return children;
};
AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
