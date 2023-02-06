import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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
                <div>
                    <Link aria-current="page" to="/login">
                        <button className="btn btn-danger rounded-pill px-4 me-3">
                            <span className="icon-sign-in position-relative z-1 me-2"></span>
                            войти
                        </button>
                    </Link>
                    <button className="btn btn-danger rounded-pill px-4 position-relative">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                            0
                        </span>
                        <span className="icon-basket position-relative z-1 me-2"></span>
                        корзина
                    </button>
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
                            <li
                                className="nav-item dropdown"
                                onClick={toggleMenuItem}
                            >
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Категории
                                </a>
                                <ul
                                    className={
                                        "dropdown-menu" +
                                        (isOpen ? " show" : "")
                                    }
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            гирлянды
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            елочные шары
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            животные
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            новогодние персонажи
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            звезды
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            снежинки
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            светящийся декор
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Корзина
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">О нас</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
