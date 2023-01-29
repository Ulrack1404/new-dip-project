import React, { useState } from "react";

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
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className={"border navbar-toggler" + (isOpenBurg ? " collapsed" : "")}
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
                    className={"collapse navbar-collapse" + (isOpenBurg ? " show" : "") }
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Каталог товаров
                            </a>
                        </li>
                        <li className="nav-item dropdown" onClick={toggleMenuItem}>
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
                                    "dropdown-menu" + (isOpen ? " show" : "")
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
                    <div className="d-flex flex-row">
                        <div>
                            <a href="#">
                                <div className="icon-search me-5"></div>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <div className="icon-sign-in me-5"></div>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <div className="icon-basket position-relative z-1">
                                    <span className="icon-basket-digit position-absolute translate-middle badge rounded-pill bg-info">
                                        0
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
