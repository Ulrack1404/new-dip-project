import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Foods from "./app/components/ui/foods";
import NavBar from "./app/components/ui/navBar";
import Login from "./app/layouts/Login";
import Main from "./app/layouts/main";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/foods/:foodId?" component={Foods} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
