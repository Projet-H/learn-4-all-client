import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { ClassIndex as Class } from "./components/class/";
import { ClassNew } from "./components/class/new/Class";
import { SubjectIndex as Subject } from "./components/subject/";
import { SubjectNew } from "./components/subject/new/Subject";
import { getSessionCookie } from "./context/session";
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
import { SessionContext } from "./context/session";
import { Can } from "./helpers/Can";

export const Routes = () => {
  const { setUser } = useContext(SessionContext);

  useEffect(() => {
    const getOwnUser = () => {
      const currentUser = getSessionCookie().token
        ? jwt_decode(getSessionCookie().token)
        : {};
      setUser({ ...currentUser });
    };
    getOwnUser();
  }, [setUser]);

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
    <Switch>
      <Route exact path="/" component={HomeComponent}></Route>
      <Route
        path={CLASS}
        component={props => (
          <Can I="view" a="Class">
            {() => <ClassComponent {...props} />}
          </Can>
        )}
      />
      <Route exact path={CLASSNEW} component={ClassNewComponent}></Route>
      <Route exact path={SUBJECT} component={SubjectComponent}></Route>
      <Route exact path={SUBJECTNEW} component={SubjectNewComponent}></Route>
      <Route exact path={ISSUES} component={IssuesComponent}></Route>
      <Route exact path={LOGIN} component={LoginComponent}></Route>
      <Route exact path={REGISTER} component={RegisterComponent}></Route>
      <Route exact path={NOTFOUND} component={NotFoundComponent} />
      <Redirect to={NOTFOUND} />
    </Switch>
  );
};
