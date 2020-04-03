export const requests = {
  get: url =>
    fetch(url, {
      method: "GET"
    }),
  post: (url, body) =>
    fetch(url, {
      method: "POST",
      body: JSON.stringify(body)
    }),
  put: (url, body) =>
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(body)
    }),
  delete: url =>
    fetch(url, {
      method: "DELETE"
    })
};
