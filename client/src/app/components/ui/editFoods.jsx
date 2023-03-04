import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFoods, removeFood, getModalId } from "../../store/foods";
import AddFood from "./addFood";
import TableData from "./tableData";

const EditFoods = () => {
    const foods = useSelector(getFoods());

    const columns = {
        imageUrl: {
            path: "imageUrl",
            name: "Изображение"
        },
        name: {
            path: "name",
            name: "Наименование"
        },
        category: {
            path: "category",
            name: "Категория"
        },
        description: {
            path: "description",
            name: "Описание"
        },
        price: {
            path: "price",
            name: "Цена"
        },
        editItem: {
            path: "editItem",
            name: ""
        },
        deleteItem: {
            path: "deleteItem",
            name: ""
        }
    };
    // ------------scroll
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0);
        });
    }, []);

    // -----------Modal
    const [isModal, setModal] = useState(false);
    const dispatch = useDispatch();
    const modId = useSelector(getModalId());

    const toggleModal = () => {
        setModal(!isModal);
    };

    const handleRemoveFood = () => {
        dispatch(removeFood(modId));
        toggleModal();
    };

    const canselModal = ({ target }) => {
        const modalWindow = document.querySelector("#modalWindow");
        if (target.parentElement !== modalWindow) {
            toggleModal();
        }
    };

    if (foods) {
        return (
            <>
                <div className="mx-5">
                    <h1 className="fs-2 text-center text-gray-900 dark:text-white">
                        Страница редактирования меню
                    </h1>
                    <div className="flex relative container justify-content-between">
                        <div className="w-1/4">
                            <div className="overflow-hidden rounded-lg my-5 h-auto fixed top-[170px]">
                                <AddFood />
                            </div>
                        </div>
                        {foods.length > 0 ? (
                            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                                <table className="w-full border-collapse text-left bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
                                    <thead className="bg-gray-50 text-left">
                                        <tr className="bg-gray-50 dark:bg-gray-700">
                                            {Object.keys(columns).map(
                                                (column) => (
                                                    <th
                                                        key={column}
                                                        scope="col"
                                                        className="pr-6 py-4"
                                                    >
                                                        {columns[column].name}
                                                    </th>
                                                )
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                        {foods.map((item) => (
                                            <tr
                                                key={item._id}
                                                className="hover:bg-gray-200 hover:dark:bg-blue-gray-600"
                                            >
                                                <TableData
                                                    food={item}
                                                    columns={columns}
                                                    isModal={isModal}
                                                    toggleModal={toggleModal}
                                                />
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="flex-grow-1">
                                <div className="fs-5 text-center mt-5">
                                    К сожалению ничего нет!
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {isModal && (
                    <div
                        className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-blue-gray-900 bg-opacity-50"
                        onClick={canselModal}
                    >
                        <div
                            className="bg-white rounded-xl shadow-lg w-10/12 md:w-1/3"
                            id="modalWindow"
                        >
                            <div className="p-3">
                                Вы действительно хотите удалить?
                            </div>
                            <div className="flex justify-end items-center w-100 border-t p-3">
                                <button
                                    className="bg-red-600 hover:bg-red-700 px-3 py-2 mr-5 rounded-xl text-white close-modal"
                                    onClick={toggleModal}
                                >
                                    Отмена
                                </button>
                                <button
                                    onClick={handleRemoveFood}
                                    className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-xl text-white"
                                >
                                    Удалить
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }
};

export default EditFoods;
