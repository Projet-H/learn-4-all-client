import { requests } from "./requests";

export const Auth = {
  login: (login, password) =>
    requests.post("/users/login", { login, password }),
  register: (email, username, firstname, lastname, password) =>
    requests.post("/users/register", {
      email,
      username,
      firstname,
      lastname,
      password
    })
};
