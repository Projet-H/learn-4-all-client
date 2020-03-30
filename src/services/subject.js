import { requests } from "./requests";

export const Subject = {
  list: () => requests.get("/subject")
};
