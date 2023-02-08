import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Foods from "./app/components/ui/foods";
import NavBar from "./app/components/ui/navBar";
import Login from "./app/layouts/Login";
import Main from "./app/layouts/main";
import AppLoader from "./app/components/ui/hoc/appLoader";
import ProtectedRoute from "./app/components/common/protectedRoute";
import Basket from "./app/components/ui/basket";

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar />
                <Switch>
                    <ProtectedRoute path="/basket" component={Basket} />
                    <Route path="/foods/:foodId?" component={Foods} />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </AppLoader>
        </div>
    );
}

export default App;
