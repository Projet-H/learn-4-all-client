import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { NotFound } from "./components/NotFound";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { Home } from "./components/Home";
import { NOTFOUND, LOGIN, REGISTER, HOME } from "./helpers/route-constant";
import { withTitleAnimation } from "./helpers/withTitle";

export const Routes = () => {
  const HomeComponent = withTitleAnimation({
    component: Home,
    title: "Home"
  });
  const RegisterComponent = withTitleAnimation({
    component: Register,
    title: "Register"
  });
  const LoginComponent = withTitleAnimation({
    component: Login,
    title: "Login"
  });
  const NotFoundComponent = withTitleAnimation({
    component: NotFound,
    title: "404 - Not Found"
  });

  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={HomeComponent}></Route>
        <Route exact path={LOGIN} component={LoginComponent}></Route>
        <Route exact path={REGISTER} component={RegisterComponent}></Route>
        <Route exact path={NOTFOUND} component={NotFoundComponent} />
        <Redirect to={NOTFOUND} />
      </Switch>
    </Router>
  );
};
