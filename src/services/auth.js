import { requests } from "./requests";

export const Auth = {
  register: (email, username, firstname, lastname, password) =>
    requests.post("/users", {
      email,
      username,
      firstname,
      lastname,
      password
    })
};
