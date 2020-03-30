import { requests } from "./requests";

export const Class = {
  list: () => requests.get("/class")
};
