import { requests } from "./requests";

export const Class = {
  list: () => requests.get("/degree"),
  new: grade => requests.post("/degree", grade)
};
