export const postAuthor = author => {
  return fetch(`${process.env.API_URL}/api/v1/authors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(author)
  })
    .then(res => res.json());
};
