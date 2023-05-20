import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @param {*} id 
 * @returns 
 */
export const StudentsQueryJSON = () => ({
  "query":
    `query {
            userPage {
              id
              name
              surname    
              membership {
                id
                group {
                  name
                }
              }
            }
}`
});


/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @param {*} id 
 * @returns 
 */
export const StudentsQuery = () =>
  authorizedFetch('/gql', {
    body: JSON.stringify(StudentsQueryJSON()),
  })