import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem
} from "@material-tailwind/react";
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
        <Menu>
            <MenuHandler>
                <div className="flex items-center text-xl hover-underline">
                    <div className="underline-item light:text-black dark:text-white">
                        {currentUser.name}
                        <i className="bi bi-chevron-down"></i>
                    </div>
                    <img
                        src={currentUser.image}
                        alt=""
                        className="img-responsive rounded-circle h-12"
                    />
                </div>
            </MenuHandler>
            <MenuList className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
                <MenuItem onClick={logOut}>Выйти</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default NavProfile;
