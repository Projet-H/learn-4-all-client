import { requests } from "./requests";

export const Me = {
  own: () => requests.get("/users/1")
};
