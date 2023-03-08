import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/auth";

function ProtectedRouteAdmin({ component: Component, children, ...rest }) {
    const currentUser = useSelector(getCurrentUserData());

    return (
        <Route
            {...rest}
            render={(props) => {
                if (currentUser && currentUser.role !== "admin") {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
                return Component ? <Component {...props} /> : children;
            }}
        />
    );
}
ProtectedRouteAdmin.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ProtectedRouteAdmin;
