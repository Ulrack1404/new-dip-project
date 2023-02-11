import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getFoodById,
    getFoodsLoadingStatus,
    updateFoodData
} from "../../store/foods";
import {
    getCategoriesLoadingStatus,
    getCategoryById,
    getCategories
} from "../../store/categories";
import BackHistoryButton from "../common/backButton";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import TextAreaField from "../common/form/textAreaField";
import SelectField from "../common/form/selectField";
import { setFoodId } from "../../services/localStorage.service";

const EditFoodPage = ({ foodId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const food = useSelector(getFoodById(foodId));
    const categories = useSelector(getCategories());
    const foodsLoading = useSelector(getFoodsLoadingStatus());
    const categoriesLoading = useSelector(getCategoriesLoadingStatus());
    const getCategory = useSelector(getCategoryById(food.category));
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const [errors, setErrors] = useState({});

    const categoriesList = categories.map((cat) => ({
        label: cat.name,
        value: cat._id
    }));

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log("data submit:", data);
        dispatch(updateFoodData({ ...data }));

        history.push(`/foods/${foodId}`);
    };

    useEffect(() => {
        if (!foodsLoading && !categoriesLoading && !data) {
            setData({ ...food });
            setFoodId(foodId);
        }
    }, [foodsLoading, categoriesLoading, food, data]);

    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Введите наименование"
            }
        },
        price: {
            isRequired: {
                message: "Введите цену"
            },
            isOnlyDigit: {
                message: "Вводите только числа"
            }
        }
    };

    useEffect(() => {
        validate();
        console.log("data:", data);
    }, [data]);

    return (
        <div className="container mt-2">
            <h1 className="h2 text-center mb-2">Измените данные о товаре</h1>
            <div className="col-md-6 offset-md-3 shadow p-4">
                <div className="_ibg col-6 mb-4 h-100px radius-40px">
                    <img
                        src={require(`../../../img/categories/${food.imageUrl}.jpg`)}
                        alt=""
                    />
                </div>
                {!isLoading && Object.keys(categories).length > 0 ? (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Наименование"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <TextField
                            label="Цена"
                            name="price"
                            value={data.price.toString()}
                            onChange={handleChange}
                            error={errors.price}
                        />
                        <SelectField
                            label="Выберите категорию"
                            defaultOption="Choose..."
                            options={categoriesList}
                            name="category"
                            onChange={handleChange}
                            value={data.category}
                            error={errors.category}
                        />
                        <TextAreaField
                            label="Описание"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <div className="text-center mb-3">
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-danger w-75 mx-auto rounded-pill"
                            >
                                Обновить
                            </button>
                        </div>
                    </form>
                ) : (
                    "Loading..."
                )}
                <BackHistoryButton />
            </div>
        </div>
    );
};
EditFoodPage.propTypes = {
    foodId: PropTypes.string
};

export default EditFoodPage;
