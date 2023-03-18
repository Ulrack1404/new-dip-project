import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const DarkModeContext = React.createContext();

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};

function setToLocalStorage(theme) {
    return localStorage.setItem("theme", theme);
}
export function getFromLocalStorage() {
    return localStorage.getItem("theme");
}

export const DarkModeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getFromLocalStorage() || "light");
    setToLocalStorage(theme);

    const toggleMode = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const html = document.documentElement;
    useEffect(() => {
        if (theme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [theme]);

    return (
        <DarkModeContext.Provider value={{ theme, toggleMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
DarkModeProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
