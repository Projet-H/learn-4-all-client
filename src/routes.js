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
import { ClassNew } from "./components/class/new/Class";
import { SubjectIndex as Subject } from "./components/subject/";
import { SubjectNew } from "./components/subject/new/Subject";

import { IssuesIndex as Issues } from "./components/issues/";
import {
  NOTFOUND,
  LOGIN,
  REGISTER,
  CLASS,
  SUBJECT,
  ISSUES,
  CLASSNEW,
  SUBJECTNEW
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
  const ClassNewComponent = withTitleAnimation({
    component: ClassNew,
    title: "ClassNew"
  });
  const SubjectComponent = withTitleAnimation({
    component: Subject,
    title: "Subject"
  });
  const SubjectNewComponent = withTitleAnimation({
    component: SubjectNew,
    title: "SubjectNew"
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
        <Route exact path={CLASSNEW} component={ClassNewComponent}></Route>
        <Route exact path={SUBJECT} component={SubjectComponent}></Route>
        <Route exact path={SUBJECTNEW} component={SubjectNewComponent}></Route>
        <Route exact path={ISSUES} component={IssuesComponent}></Route>
        <Route exact path={LOGIN} component={LoginComponent}></Route>
        <Route exact path={REGISTER} component={RegisterComponent}></Route>
        <Route exact path={NOTFOUND} component={NotFoundComponent} />
        <Redirect to={NOTFOUND} />
      </Switch>
    </Router>
  );
};
