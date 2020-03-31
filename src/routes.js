import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { ClassIndex as Class } from "./components/class/";
import { SubjectIndex as Subject } from "./components/subject/";
import { IssuesIndex as Issues } from "./components/issues/";
import {
  NOTFOUND,
  LOGIN,
  REGISTER,
  CLASS,
  SUBJECT,
  ISSUES
} from "./helpers/route-constant";
import { withTitleAnimation } from "./helpers/withTitle";

export const Routes = () => {
  const HomeComponent = withTitleAnimation({
    component: Home,
    title: "Home"
  });
  const ClassComponent = withTitleAnimation({
    component: Class,
    title: "Class"
  });
  const SubjectComponent = withTitleAnimation({
    component: Subject,
    title: "Subject"
  });
  const IssuesComponent = withTitleAnimation({
    component: Issues,
    title: "Issues"
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
        <Route exact path="/" component={HomeComponent}></Route>
        <Route exact path={CLASS} component={ClassComponent}></Route>
        <Route exact path={SUBJECT} component={SubjectComponent}></Route>
        <Route exact path={ISSUES} component={IssuesComponent}></Route>
        <Route exact path={LOGIN} component={LoginComponent}></Route>
        <Route exact path={REGISTER} component={RegisterComponent}></Route>
        <Route exact path={NOTFOUND} component={NotFoundComponent} />
        <Redirect to={NOTFOUND} />
      </Switch>
    </Router>
  );
};
