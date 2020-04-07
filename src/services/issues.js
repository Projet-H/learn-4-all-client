import { requests } from "./requests";

export const Issues = {
  mine: (id) => requests.get(`/profiles/${id}/conversations`),
  listReport: () => requests.get("/messages/reported"),
  rejectReport: (id) => requests.put(`/messages/${id}/reject-report`),
  acceptReport: (id) => requests.delete(`/messages/${id}/accept-report`),
};
