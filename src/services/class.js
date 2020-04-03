import { requests } from "./requests";

export const Class = {
  list: () => requests.get("/degree"),
  new: grade => requests.post("/degree", grade),
  listInactive: () => requests.get("/degree/inactive"),
  remove: id => requests.delete(`/degree/${id}`),
  active: id => requests.put(`/degree/${id}`)
};
