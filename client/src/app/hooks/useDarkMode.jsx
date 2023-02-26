import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const DarkModeContext = React.createContext();

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
    const [isMode, setMode] = useState(false);

    const toggleMode = () => {
        setMode(!isMode);
    };

    useEffect(() => {
        const body = window.document.body;

        const prevThemeBgr = isMode ? "white_bgr" : "dark_bgr";
        const prevThemeText = isMode ? "black_txt" : "white_txt";
        body.classList.remove(prevThemeBgr, prevThemeText);

        const nextThemeBgr = isMode ? "dark_bgr" : "white_bgr";
        const nextThemeText = isMode ? "white_txt" : "black_txt";
        body.classList.add(nextThemeBgr, nextThemeText);
    }, [isMode]);

    return (
        <DarkModeContext.Provider value={{ isMode, toggleMode }}>
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
