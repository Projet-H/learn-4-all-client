import { requests } from "./requests";

export const Issues = {
  list: () => requests.get("/issues")
};
