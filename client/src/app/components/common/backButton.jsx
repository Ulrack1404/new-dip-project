import React from "react";
import { useHistory } from "react-router-dom";
const BackHistoryButton = () => {
    const history = useHistory();
    return (
        <button className=" rounded-pill w-75 py-2 bg-green-700 hover:bg-green-900 text-gray-50" onClick={() => history.goBack()}>
            <i className="bi bi-caret-left"></i>
            Назад
        </button>
    );
};

export default BackHistoryButton;
