import { authorizedFetch } from './authorizedFetch'

/**
 * Funkce
 *  
 */
export const SpecificUserQueryJSON = (id) => ({
    "query":
        `query ($id: ID!) {
          result: userById(id: $id) {
            id
            name
            surname    
            membership {
              id
              group {
                name
                id
              }
            }
          }
        }`,
        "variables": {"id": id}
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */
export const SpecificUserQuery = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(SpecificUserQueryJSON(id)),
    })