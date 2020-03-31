import { requests } from "./requests";

export const Subject = {
  list: () => requests.get("/subject"),
  new: (grade, subject) => requests.post("/subject", { grade, subject })
};
