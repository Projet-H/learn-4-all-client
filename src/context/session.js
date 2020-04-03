import { createContext } from "react";
import * as cookies from "js-cookie";

export const setSessionCookie = session => {
  cookies.remove("session");
  cookies.set("session", session, { expires: 1 });
};

export const getSessionCookie = () => {
  const sessionCookie = cookies.get("session");

  return sessionCookie === undefined
    ? { auth: false, token: "" }
    : { auth: true, token: sessionCookie };
};

export const SessionContext = createContext({
  session: { auth: false, token: "" },
  setSession: () => {},
  user: {},
  setUser: () => {},
  socket: {},
  setSocket: () => {}
});
