import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { getCurrentUserData, logout } from "../../store/auth";

function NavProfile() {
    const currentUser = useSelector(getCurrentUserData());
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);

    const logOut = () => {
        dispatch(logout());
    };
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    if (!currentUser) return "loading";
    return (
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2">{currentUser.name}</div>
                <img
                    src={currentUser.image}
                    alt=""
                    height="40"
                    className="img-responsive rounded-circle"
                />
            </div>
            <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
                <div className="dropdown-item">
                    <button onClick={logOut} className="btn d-block w-100 btn-warning" >Выйти</button>
                </div>
            </div>
        </div>
    );
}

export default NavProfile;
