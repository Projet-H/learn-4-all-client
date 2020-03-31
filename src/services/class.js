import { requests } from "./requests";

export const Class = {
  list: () => requests.get("/class"),
  new: grade => requests.post("/class", grade)
};
