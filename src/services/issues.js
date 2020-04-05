import { requests } from "./requests";

export const Issues = {
  mine: (id) => requests.get(`/profiles/${id}/conversations`),
};
