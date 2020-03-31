import React, { useState, useEffect } from "react";

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
      {session.auth ? (
        <>
          <Navbar />
          <Routes />
        </>
      ) : (
        <Routes />
      )}
    </SessionContext.Provider>
  );
};

export default App;
