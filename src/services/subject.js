import { requests } from "./requests";

export const Subject = {
  list: slug => requests.get(`/degree/${slug}`),
  new: (slugDegree, slug, name) =>
    requests.post("/subjects", { slugDegree, slug, name, active: false })
};
