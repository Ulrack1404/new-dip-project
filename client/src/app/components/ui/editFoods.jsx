import React from "react";
import { useSelector } from "react-redux";
import { getFoods } from "../../store/foods";
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
            name: "Редактировать"
        },
        deleteItem: {
            path: "deleteItem",
            name: "Удалить"
        }
    };

    if (foods) {
        return (
            <div className="mx-5">
                <h1 className="fs-2 text-center">
                    Страница редактирования меню
                </h1>
                <div className="d-flex container">
                    <div className="w-25 border me-2">
                        <AddFood/>
                    </div>
                    <div className="w-75 border">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    {Object.keys(columns).map((column) => (
                                        <th key={column} scope="col">
                                            {columns[column].name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {foods.map((item) => (
                                    <tr key={item._id}>
                                        <TableData
                                            food={item}
                                            columns={columns}
                                        />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};

export default EditFoods;
