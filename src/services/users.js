import { requests } from "./requests";

export const Users = {
  list: () => requests.get(`/profiles`),
  remove: (id) => requests.delete(`/profiles/${id}`),
};
