import React from "react";
import { useHistory } from "react-router-dom";
const BackHistoryButton = () => {
    const history = useHistory();
    return (
        <button className="btn btn-success rounded-pill px-4" onClick={() => history.goBack()}>
            <i className="bi bi-caret-left"></i>
            Назад
        </button>
    );
};

export default BackHistoryButton;
