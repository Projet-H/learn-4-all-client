import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Login } from "./login/Login";
import { Register } from "./register/Register";
import { NotFound } from "./NotFound";

import { NOTFOUND, LOGIN, REGISTER } from "../helpers/route-constant";
import { withTitle } from "../helpers/withTitle";

export const Landing = () => {
  const LoginComponent = withTitle({ component: Login, title: "Login" });
  const RegisterComponent = withTitle({
    component: Register,
    title: "Inscription"
  });
  const NotFoundComponent = withTitle({
    component: NotFound,
    title: "404 - Not Found"
  });

  return (
    <Switch>
      <Redirect exact from="/" to={LOGIN} />
      <Route path={LOGIN} component={LoginComponent}></Route>
      <Route path={REGISTER} component={RegisterComponent}></Route>
      <Route exact path={NOTFOUND} component={NotFoundComponent} />
      <Redirect to={NOTFOUND} />
    </Switch>
  );
};
