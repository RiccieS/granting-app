import { authorizedFetch } from '../queries/authorizedFetch';

export const UserClassificationMutationQueryJSON = ({id, lastchange, level_id}) => ({
  query: `
  mutation($id: ID! $lastchange: DateTime! $level_id: ID!) {
      result: classificationUpdate(classification: {
        id: $id,
        lastchange: $lastchange,
        classificationlevelId: $level_id
      }) {
        id
        msg
        classification {
          user {
            id
            name
            surname
            email
            classifications {
              id
              lastchange
              order
              semester { id }
              level { id name }
              date
            }
          }
        }
      }
    }
  `,
  variables: {id, level_id, lastchange}
})
export const UserClassificationMutationQuery = ({id, lastchange, level_id}) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(UserClassificationMutationQueryJSON({id, lastchange, level_id}))
    })