import { requests } from "./requests";

export const Subject = {
  list: slug => requests.get(`/subjects/${slug}`),
  new: (slugDegree, slug, name, active) =>
    requests.post("/subjects", { slugDegree, slug, name, active }),
  listInactive: () => requests.get("/subjects/inactive"),
  remove: id => requests.delete(`/subjects/${id}`),
  active: id => requests.put(`/subjects/${id}`)
};
