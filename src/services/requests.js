export const requests =
  process.env.NODE_ENV !== "production"
    ? {
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
        del: url =>
          fetch(url, {
            method: "DELETE"
          })
      }
    : {
        get: url =>
          fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "GET"
          }),
        post: (url, body) =>
          fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "POST",
            body: JSON.stringify(body)
          }),
        put: (url, body) =>
          fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "PUT",
            body: JSON.stringify(body)
          }),
        del: url =>
          fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "DELETE"
          })
      };
