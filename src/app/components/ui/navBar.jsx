import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoggedIn } from "../../store/auth";
import NavProfile from "./navProfile";
import {
    getSummaryBasketCounter,
    getSummaryBasketPrice
} from "../../store/basket";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const basCount = useSelector(getSummaryBasketCounter());
    const basPrice = useSelector(getSummaryBasketPrice());

    const [isOpen, setOpen] = useState(false);
    const [isOpenBurg, setOpenBurg] = useState(false);

    const toggleMenuItem = () => {
        setOpen((prevState) => !prevState);
    };
    const toggleMenuBurg = () => {
        setOpenBurg((prevState) => !prevState);
    };
    return (
        <div className="container mt-1">
            <div className="d-flex justify-content-between align-items-center">
                <Link to={"/"}>
                    <div className="logotip"></div>
                </Link>
                <div className="text-bold">с 10:00 до 23:00</div>
                <div className="text-bold orange">+7 (4752) 12-34-56</div>
                <div className="d-flex">
                    <Link to="/basket">
                        <button className="btn btn-danger rounded-pill px-4 position-relative  me-3">
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill fs-6 bg-info">
                                {isLoggedIn && basCount > 0
                                    ? `${basPrice} ₽`
                                    : 0}
                            </span>
                            <span className="icon-basket position-relative z-1 me-2"></span>
                            корзина
                        </button>
                    </Link>
                    <div className="d-flex ">
                        {isLoggedIn ? (
                            <NavProfile />
                        ) : (
                            <Link aria-current="page" to="/login">
                                <button className="btn btn-danger rounded-pill px-4">
                                    <span className="icon-sign-in position-relative z-1 me-2"></span>
                                    войти
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <nav className="navbar sticky navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        className={
                            "border navbar-toggler" +
                            (isOpenBurg ? " collapsed" : "")
                        }
                        onClick={toggleMenuBurg}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isOpenBurg ? "false" : "true"}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                        <i className="bi bi-list"></i>
                    </button>

                    <div
                        className={
                            "collapse navbar-collapse" +
                            (isOpenBurg ? " show" : "")
                        }
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to={"/foods"}
                                >
                                    Каталог товаров
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">О нас</a>
                            </li>
                            {isLoggedIn && (
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to={"/foods"}
                                    >
                                        Редактировать каталог
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
