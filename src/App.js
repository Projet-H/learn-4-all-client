import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";

import { getSessionCookie, SessionContext } from "./context/session";
import { Routes } from "./routes";
import { Navbar } from "./components/Navbar";
import "./App.css";

const App = () => {
  const [session, setSession] = useState(getSessionCookie());
  const contextValue = { session, setSession };

  useEffect(() => {
    setSession(getSessionCookie());
  }, []);

  return (
    <SessionContext.Provider value={contextValue}>
      <Container>
        {session.auth ? (
          <>
            <Navbar />
            <Routes />
          </>
        ) : (
          <Routes />
        )}
      </Container>
    </SessionContext.Provider>
  );
};

export default App;
