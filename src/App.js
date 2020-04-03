import React, { useState, useEffect } from "react";
import fetchIntercept from "fetch-intercept";
import * as Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { getSessionCookie, SessionContext } from "./context/session";
import { Routes } from "./routes";
import { Navbar } from "./components/Navbar";
import { LOGIN } from "./helpers/route-constant";
import { Landing } from "./components/Landing";
import { ability, defineRulesFor } from "./helpers/ability";
import "./App.css";

const App = () => {
  const [session, setSession] = useState(getSessionCookie());
  const [user, setUser] = useState({});
  const [socket, setSocket] = useState({});
  const contextValue = {
    session,
    setSession,
    user,
    setUser,
    socket,
    setSocket
  };
  const { push } = useHistory();

  fetchIntercept.register({
    request: (url, config) => {
      config.headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getSessionCookie().token}`
      };
      return [url, config];
    },
    requestError: error => {
      return Promise.reject(error);
    },
    response: async response => {
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
    responseError: error => {
      return Promise.reject(error);
    }
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
        <>
          <Navbar />
          <Routes />
        </>
      ) : (
        <Landing />
      )}
    </SessionContext.Provider>
  );
};

export default App;
