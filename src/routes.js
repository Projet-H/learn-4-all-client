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
import { ClassIndex as Class } from "./components/class/";
import { NOTFOUND, LOGIN, REGISTER, CLASS } from "./helpers/route-constant";
import { withTitleAnimation } from "./helpers/withTitle";

export const Routes = () => {
  const ClassComponent = withTitleAnimation({
    component: Class,
    title: "Class"
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
        <Route exact path={CLASS} component={ClassComponent}></Route>
        <Route exact path={LOGIN} component={LoginComponent}></Route>
        <Route exact path={REGISTER} component={RegisterComponent}></Route>
        <Route exact path={NOTFOUND} component={NotFoundComponent} />
        <Redirect to={NOTFOUND} />
      </Switch>
    </Router>
  );
};
