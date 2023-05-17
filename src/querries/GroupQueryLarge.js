import { authorizedFetch } from './authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @param {*} id 
 * @returns 
 */
export const GroupQueryLargeJSON = (id) => ({
    "query":
        `query {
            acclassificationPage {
              id
              lastchange
              user {
                id
                email
              }
              semester {
                id
                subject {
                  id
                  name
                }
                order
              }
              type {
                id
                name
              }
              level {
                id
                name
              }          
            }          
          }`,
    //"variables": {"id": id}
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @param {*} id 
 * @returns 
 */
export const GroupQueryLarge = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupQueryLargeJSON(id)),
    })