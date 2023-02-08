import React from "react";

const Loader = () => {
    return (
        <div className="d-flex justify-content-center h-400px align-items-center">
            <div className="spinner-grow text-warning me-3" role="status">
                <span className="visually-hidden"></span>
            </div>
            <div className="spinner-grow text-warning me-3" role="status">
                <span className="visually-hidden"></span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    );
};

export default Loader;
