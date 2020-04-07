import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import io from "socket.io-client";

import { getSessionCookie } from "./context/session";
import { Homepage } from "./components/homepage/Homepage";
import { NotFound } from "./components/NotFound";
import { ClassIndex as Class } from "./components/class/";
import { ClassNew } from "./components/class/new/Class";
import { SubjectIndex as Subject } from "./components/subject/";
import { SubjectNew } from "./components/subject/new/Subject";
import { IssuesIndex as Issues } from "./components/issues/";
import { IssuesNew } from "./components/issues/new/Issues";
import { Conversation } from "./components/issues/conversations/Conversation";
import { Profil } from "./components/profil/Profil";
import { Degree as ValidateDegree } from "./components/validate/Degree";
import { Subject as ValidateSubject } from "./components/validate/Subject";
import { MyIssues } from "./components/issues/MyIssues";
import { UsersIndex as Users } from "./components/users/";
import { Report } from "./components/issues/Report";
import {
  NOTFOUND,
  LOGIN,
  CLASS,
  SUBJECT,
  ISSUES,
  CLASSNEW,
  SUBJECTNEW,
  ISSUESNEW,
  PROFIL,
  VALIDATECLASS,
  VALIDATESUBJECT,
  HOME,
  CONVERSATION,
  MYISSUES,
  USERS,
  REPORT,
} from "./helpers/route-constant";

import { withTitleAnimation } from "./helpers/withTitle";
import { SessionContext } from "./context/session";
import { Me } from "./services/me";
import { Can } from "./helpers/Can";

export const Routes = () => {
  const { setUser, setSocket } = useContext(SessionContext);

  useEffect(() => {
    const getOwnUser = async () => {
      const userId = jwt_decode(getSessionCookie().token).id;
      const response = await Me.own(userId);
      const dataJson = await response.json();
      setUser({ ...dataJson, password: "" });

      const socket = io.connect(process.env.REACT_APP_SOCKET, {
        query: { token: getSessionCookie().token },
        forceNew: true,
      });
      setSocket(socket);
    };
    getOwnUser();
  }, [setSocket, setUser]);

  const HomeComponent = withTitleAnimation({
    component: Homepage,
    title: "Accueil",
  });
  const ClassComponent = withTitleAnimation({
    component: Class,
    title: "Listes des classes",
  });
  const ClassNewComponent = withTitleAnimation({
    component: ClassNew,
    title: "Création d'une classe",
  });
  const SubjectComponent = withTitleAnimation({
    component: Subject,
    title: "Liste des matières",
  });
  const SubjectNewComponent = withTitleAnimation({
    component: SubjectNew,
    title: "Création des matières",
  });
  const IssuesComponent = withTitleAnimation({
    component: Issues,
    title: "Liste des problèmes",
  });
  const IssuesNewComponent = withTitleAnimation({
    component: IssuesNew,
    title: "Création d'un problème",
  });
  const ConversationComponent = withTitleAnimation({
    component: Conversation,
    title: "Discussion",
  });
  const NotFoundComponent = withTitleAnimation({
    component: NotFound,
    title: "404 - Not Found",
  });
  const ProfilComponent = withTitleAnimation({
    component: Profil,
    title: "Choix du rôle",
  });
  const ValidateClassComponent = withTitleAnimation({
    component: ValidateDegree,
    title: "Gestion des classes",
  });
  const ValidateSubjectComponent = withTitleAnimation({
    component: ValidateSubject,
    title: "Gestion des matières",
  });
  const MyIssuesComponent = withTitleAnimation({
    component: MyIssues,
    title: "Liste des mes problématiques",
  });
  const UsersComponent = withTitleAnimation({
    component: Users,
    title: "Liste des utilisateurs",
  });
  const ReportComponent = withTitleAnimation({
    component: Report,
    title: "Signalements",
  });

  return (
    <Switch>
      <Route exact path={HOME} component={HomeComponent}></Route>
      <Route exact path={LOGIN} component={HomeComponent}></Route>
      <Route
        exact
        path={CLASS}
        component={(props) => (
          <Can I="view" a="Class">
            {() => <ClassComponent {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={CLASSNEW}
        component={(props) => (
          <Can I="add" a="Class">
            {() => <ClassNewComponent {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={SUBJECT}
        component={(props) => (
          <Can I="view" a="Subject">
            {() => <SubjectComponent {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={SUBJECTNEW}
        component={(props) => (
          <Can I="add" a="Subject">
            {() => <SubjectNewComponent {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={ISSUES}
        component={(props) => (
          <Can I="view" a="Issues">
            {() => <IssuesComponent {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={ISSUESNEW}
        component={(props) => (
          <Can I="add" a="Issues">
            {() => <IssuesNewComponent {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={CONVERSATION}
        component={(props) => (
          <Can I="view" a="Conversation">
            {() => <ConversationComponent {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={PROFIL}
        component={(props) => (
          <Can I="view" a="Profil">
            {() => <ProfilComponent {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={VALIDATECLASS}
        component={(props) => (
          <Can I="validate" a="Degree">
            {() => <ValidateClassComponent {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={VALIDATESUBJECT}
        component={(props) => (
          <Can I="validate" a="Subject">
            {() => <ValidateSubjectComponent {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={MYISSUES}
        component={(props) => (
          <Can I="view" a="MyIssues">
            {() => <MyIssuesComponent {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={USERS}
        component={(props) => (
          <Can I="view" a="Users">
            {() => <UsersComponent {...props} />}
          </Can>
        )}
      />
      <Route
        exact
        path={REPORT}
        component={(props) => (
          <Can I="view" a="Report">
            {() => <ReportComponent {...props} />}
          </Can>
        )}
      />
      <Route exact path={NOTFOUND} component={NotFoundComponent} />
      <Redirect to={NOTFOUND} />
    </Switch>
  );
};
