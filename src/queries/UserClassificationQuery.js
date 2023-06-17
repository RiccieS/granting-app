import { authorizedFetch } from '../queries/authorizedFetch'

export const ClassificationByUserQueryJSON = (id) => ({
  "query": `
  query {        
    result: userById(id: "${id}") {
      id
      name
      surname
      classifications {
        id
        lastchange
        semester {
          id
          order
          subject{
            id
            name
          }
        }
        level {
          id
          name
        }
        order
        date
      }
    }
  }`,
});

export const ClassificationByUserQuery = (id) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(ClassificationByUserQueryJSON(id)),
  });
