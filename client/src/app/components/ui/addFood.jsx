import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { validator } from "../../utils/validator";
import { useHistory } from "react-router-dom";

import {
    getCategoriesLoadingStatus,
    getCategoryById,
    getCategories
} from "../../store/categories";
import TextField from "../common/form/textField";
import TextAreaField from "../common/form/textAreaField";
import SelectField from "../common/form/selectField";
import { createFoodData } from "../../store/foods";

const AddFood = () => {
    const [data, setData] = useState({
        name: "",
        category: "",
        description: "",
        price: 0
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const categories = useSelector(getCategories());
    const categoriesLoading = useSelector(getCategoriesLoadingStatus());

    const categoriesList = categories.map((cat) => ({
        label: cat.name,
        value: cat._id
    }));

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid =
        Object.keys(errors).length === 0 &&
        data.name &&
        data.category &&
        data.price;

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
        dispatch(
            createFoodData({
                ...data,
                price: Number(data.price),
                imageUrl: "template"
            })
        );
        history.push("/foods");
    };

    useEffect(() => {
        if (isLoading) {
            setIsLoading(false);
        }
    }, [data]);

    const validatorConfig = {
        price: {
            isOnlyDigit: {
                message: "Вводите только числа"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    return (
        <div>
            <h1 className="h4 text-center my-4 text-gray-900 dark:text-white">
                Добавить новый <br />
                товар
            </h1>
            {!isLoading && Object.keys(categories).length > 0 ? (
                <div className="mx-2">
                    <form
                        onSubmit={handleSubmit}
                        className="text-gray-900 dark:text-white"
                    >
                        <TextField
                            label="Наименование"
                            name="name"
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <TextField
                            label="Цена"
                            name="price"
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
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <div className="text-center mb-3">
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-danger w-75 mx-auto rounded-pill"
                            >
                                Добавить
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                "Loading..."
            )}
        </div>
    );
};

export default AddFood;
