import { requests } from "./requests";

export const Me = {
  own: id => requests.get(`/profiles/${id}`),
  edit: (id, user) => requests.put(`/profiles/${id}`, user)
};
