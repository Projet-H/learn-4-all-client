import { requests } from "./requests";

export const Auth = {
  login: (email, password) => requests.post("/auth/login", { email, password }),
  register: user => requests.post("/register", user),
  logout: () => requests.post("/auth/logout")
};
