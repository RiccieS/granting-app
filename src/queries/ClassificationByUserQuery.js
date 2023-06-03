import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * Funkce
 *  
 */
export const ClassificationByUserQueryJSON = (id) => ({
    "query":
        `query($id: ID!) {
            acclassificationPageByUser(userId: $id) {
                id
                order
                lastchange
                level {
                  id
                  name
                }
                semester {
                  order
                  subject {
                    id
                    name
                  }
                }
              }
        }`,
        "variables": {"id": id}
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */
export const ClassificationByUserQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ClassificationByUserQueryJSON()),
    })