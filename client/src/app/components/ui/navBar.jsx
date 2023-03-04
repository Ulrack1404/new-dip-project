import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Switch } from "@material-tailwind/react";
import { getIsLoggedIn } from "../../store/auth";
import NavProfile from "./navProfile";
import {
    getSummaryBasketCounter,
    getSummaryBasketPrice
} from "../../store/basket";
import { useDarkMode } from "../../hooks/useDarkMode";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const basCount = useSelector(getSummaryBasketCounter());
    const basPrice = useSelector(getSummaryBasketPrice());

    // ------------scroll
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    // -------------------

    const [isOpen, setOpen] = useState(false);
    const [isOpenBurg, setOpenBurg] = useState(false);

    const { theme, toggleMode } = useDarkMode();

    const toggleMenuItem = () => {
        setOpen((prevState) => !prevState);
    };
    const toggleMenuBurg = () => {
        setOpenBurg((prevState) => !prevState);
    };
    const handleTheme = () => {
        toggleMode(theme);
    };
    return (
        <>
            <div
                className={
                    "mx-auto w-full fixed top-0 z-50   overflow-hidden bg-gray-50 dark:bg-gray-700 duration-500 opacity-100" +
                    (scroll ? " text-xs shadow-lg  dark:shadow-inherit" : " py-2 ")
                }
            >
                <div
                    className={
                        "container" + (scroll ? " flex justify-end" : "")
                    }
                >
                    <div className="flex justify-between items-center">
                        {!scroll && (
                            <Link to={"/"}>
                                <div className="logotip duration-700"></div>
                            </Link>
                        )}
                        <div className="flex">
                            <ul className="flex items-center">
                                <li>
                                    <Link
                                        className="hover-underline text-xl nav-link text-black"
                                        to={"/foods"}
                                    >
                                        <span className="flex flex-nowrap flex-row text-xs items-center">
                                            {/* <i className="bi bi-list-task"></i> */}
                                            <svg
                                                width="25px"
                                                height="25px"
                                                viewBox="0 0 24 24"
                                                className="mr-2 text-red-500 dark:text-red-300"
                                            >
                                                <path
                                                    fill="none"
                                                    stroke="red"
                                                    strokeWidth="1.5"
                                                    d="M5,6 L1,4.5 L1,18.443038 L12,23 L23,18.443038 L23,4 L19,6 M5,16 L5,2 L12,5 L19,2 L19,16 L12,19 L5,16 Z M11.95,5 L11.95,19"
                                                />
                                            </svg>
                                            <span className="underline-item text-gray-900 dark:text-white text-xl">
                                                Каталог товаров
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover-underline nav-link text-xl  text-black"
                                        to={"/"}
                                    >
                                        <span className=" scale-150 mr-3">
                                            <i className="bi bi-people text-red-500"></i>
                                        </span>

                                        <span className="text-gray-900 dark:text-white underline-item">
                                            {" "}
                                            О нас
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover-underline nav-link text-xl  text-black"
                                        to="/basket"
                                    >
                                        <div className="relative">
                                            <div className="absolute -top-2 -right-3 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">
                                                {isLoggedIn && basCount > 0
                                                    ? `${basPrice} ₽`
                                                    : 0}
                                            </div>
                                            <span className=" scale-125 mr-1">
                                                <span className="icon-basket text-red-500"></span>
                                            </span>
                                            <span className="text-gray-900 dark:text-white underline-item">
                                                {" "}
                                                корзина
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                {isLoggedIn && (
                                    <li className="nav-item">
                                        <Link
                                            className="hover-underline nav-link text-xl  text-black"
                                            aria-current="page"
                                            to={"/edit"}
                                        >
                                            <span className=" scale-125 mr-1">
                                                <i className="bi bi-pen text-red-500"></i>
                                            </span>
                                            <span className="text-gray-900 dark:text-white underline-item">
                                                Редактировать каталог
                                            </span>
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    {isLoggedIn ? (
                                        <NavProfile />
                                    ) : (
                                        <Link
                                            className="hover-underline nav-link text-xl  text-black"
                                            to="/login"
                                        >
                                            <span className=" scale-150 mr-1">
                                                <span className="icon-sign-in position-relative z-1 me-2 text-red-500"></span>
                                            </span>
                                            <span className="text-gray-900 dark:text-white underline-item">
                                                войти
                                            </span>
                                        </Link>
                                    )}
                                </li>
                                <li>
                                    <i className="bi bi-brightness-high mr-2 text-gray-900 dark:text-white"></i>
                                    <span className="mr-3">
                                        <Switch
                                            id="red"
                                            color="red"
                                            onClick={handleTheme}
                                            defaultChecked
                                        />
                                    </span>
                                    <i className="bi bi-moon-stars light:text-black dark:text-white"></i>
                                    {/* <Button
                                className="btn border rounded-pill px-4 border-danger"
                                // onClick={handleTheme}
                            >
                                {isMode ? (
                                    <i className="bi bi-brightness-high "></i>
                                ) : (
                                    <i className="bi bi-moon-stars text-black"></i>
                                )}
                            </Button> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-32 py-10 bg-gray-50 dark:bg-gray-700"></div>
        </>
    );
};

export default NavBar;
