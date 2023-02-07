import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Foods from "./app/components/ui/foods";
import NavBar from "./app/components/ui/navBar";
import { CategoryProvider } from "./app/hooks/useCategory";
import Login from "./app/layouts/Login";
import Main from "./app/layouts/main";
import AuthProvider from "./app/hooks/useAuth";

function App() {
    return (
        <div>
            <AuthProvider>
                <NavBar />
                <CategoryProvider>
                    <Switch>
                        <Route path="/foods/:foodId?" component={Foods} />
                        <Route path="/login/:type?" component={Login} />
                        <Route path="/" exact component={Main} />
                        <Redirect to="/" />
                    </Switch>
                </CategoryProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
