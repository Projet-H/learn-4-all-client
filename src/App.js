import React, { useState, useEffect } from "react";
import fetchIntercept from "fetch-intercept";
import * as Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import { Container, makeStyles } from "@material-ui/core";
import "react-toastify/dist/ReactToastify.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { getSessionCookie, SessionContext } from "./context/session";
import { Routes } from "./routes";
import { Navbar } from "./components/Navbar";
import { LOGIN } from "./helpers/route-constant";
import { Landing } from "./components/Landing";
import { ability, defineRulesFor } from "./helpers/ability";
import "./App.css";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    minHeight: "100vh",
  },
  content: {
    flexGrow: 1,
    position: "relative",
    height: "100%",
    overflow: "hidden",
  },
});

const App = () => {
  const classes = useStyles();
  const [session, setSession] = useState(getSessionCookie());
  const [user, setUser] = useState({});
  const [socket, setSocket] = useState({});
  const contextValue = {
    session,
    setSession,
    user,
    setUser,
    socket,
    setSocket,
  };
  const { push } = useHistory();

  fetchIntercept.register({
    request: (url, config) => {
      config.headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getSessionCookie().token}`,
      };
      return [url, config];
    },
    requestError: (error) => {
      return Promise.reject(error);
    },
    response: async (response) => {
      if (response.status === 401 && session.auth) {
        const cloneResponse = await response.clone();
        const data = await cloneResponse.json();
        if (
          data.message === "Invalid signature token" ||
          data.message === "Invalid credentials given"
        ) {
          Cookies.remove("session");
          setSession({ ...session, auth: false, token: "" });
          push(LOGIN);
        }
      }
      return response;
    },
    responseError: (error) => {
      return Promise.reject(error);
    },
  });

  useEffect(() => {
    if (getSessionCookie().token) {
      const currentAuth = jwt_decode(getSessionCookie().token);
      ability.update(defineRulesFor(currentAuth));
    }
    return () => {
      setSession(getSessionCookie());
    };
  }, []);

  return (
    <SessionContext.Provider value={contextValue}>
      {session.auth ? (
        <Container maxWidth={false} className={classes.container}>
          <Navbar />
          <div className={classes.content}>
            <Routes />
          </div>
          <ToastContainer
            enableMultiContainer
            position={toast.POSITION.BOTTOM_LEFT}
            containerId={"mainToast"}
          />
        </Container>
      ) : (
        <>
          <Landing />
        </>
      )}
    </SessionContext.Provider>
  );
};

export default App;
