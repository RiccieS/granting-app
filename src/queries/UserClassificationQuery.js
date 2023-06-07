import { authorizedFetch } from '../queries/authorizedFetch'

export const ClassificationByUserQueryJSON = (id) => ({
"query":`
  query {        
    result: userById(id: '2d9dc5ca-a4a2-11ed-b9df-0242ac120003') {
      id
      name
      surname
      classifications {
        id
        lastchange
        semester {
          id
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
  variables: { id },
});

export const ClassificationByUserQuery = (id) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(ClassificationByUserQueryJSON(id)),
  });
