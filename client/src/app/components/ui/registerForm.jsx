import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/auth";
import SelectField from "../common/form/selectField";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        role: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        username: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        role: {
            isRequired: {
                message: "Укажите свой статус"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(signUp({ ...data, name: data.username }));
        history.push("/");
    };

    const roleList = [
        { label: "пользователь", value: "client" },
        { label: "администратор", value: "admin" }
    ];

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Имя пользователя"
                name="username"
                value={data.username}
                onChange={handleChange}
                error={errors.username}
            />
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <SelectField
                label="Укажите свой статус"
                value={data.role}
                onChange={handleChange}
                defaultOption="Выберите..."
                options={roleList}
                error={errors.profession}
                name="role"
            />
            <button
                className="py-2 bg-red-300 text-gray-50 hover:bg-red-900
                w-100 mx-auto rounded-md"
                type="submit"
                disabled={!isValid}
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
